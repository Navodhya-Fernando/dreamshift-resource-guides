exports.handler = async function (event) {
  const responseHeaders = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  const reply = (statusCode, payload) => ({
    statusCode,
    headers: responseHeaders,
    body: JSON.stringify(payload),
  });

  if (event.httpMethod !== "POST") {
    return reply(405, { error: "Method not allowed" });
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const industry = String(body.industry || "general").trim();
    const sourceUrl = String(body.sourceUrl || "").trim();

    if (!name || !email) {
      return reply(400, { error: "Name and email are required" });
    }

    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!token || !baseId || !tableId) {
      console.error("Airtable configuration missing", {
        hasToken: Boolean(token),
        hasBaseId: Boolean(baseId),
        hasTableId: Boolean(tableId),
      });

      return reply(500, {
        error: "Airtable environment variables are missing",
        required: ["AIRTABLE_TOKEN", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE_ID"],
      });
    }

    const endpoint =
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`;

    const fields = {
      Name: name,
      Email: email,
      Industry: industry,
      "Source URL": sourceUrl,
    };

    const airtableResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true,
      }),
    });

    const raw = await airtableResponse.text();

    let airtableBody;
    try {
      airtableBody = raw ? JSON.parse(raw) : {};
    } catch {
      airtableBody = { raw };
    }

    if (!airtableResponse.ok) {
      console.error("Airtable create-record failed", {
        status: airtableResponse.status,
        response: airtableBody,
      });

      return reply(airtableResponse.status, {
        error: "Airtable rejected the lead",
        airtable: airtableBody,
        hint:
          airtableResponse.status === 422
            ? "Check that Base ID/Table ID belong together and the Airtable fields are exactly: Name, Email, Industry, Source URL. If Industry is a select field, pre-create the 9 industry choices or ensure the token can typecast them."
            : undefined,
      });
    }

    return reply(200, {
      ok: true,
      id: airtableBody.records?.[0]?.id || null,
    });
  } catch (error) {
    console.error("Lead capture error:", error);

    return reply(500, {
      error: "Failed to save lead",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
