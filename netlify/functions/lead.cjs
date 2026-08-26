exports.handler = async function (event) {
  const headers = { "Content-Type": "application/json" };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, industry, sourceUrl } = JSON.parse(event.body || "{}");

    if (!name?.trim() || !email?.trim()) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!token || !baseId || !tableId) {
      console.error("Missing Airtable environment variables");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Airtable is not configured" }),
      };
    }

    const airtableUrl =
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`;

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name.trim(),
              Email: email.trim(),
              Industry: industry || "general",
              "Source URL": sourceUrl || "",
              "Created At": new Date().toISOString(),
            },
          },
        ],
        typecast: true,
      }),
    });

    const result = await airtableResponse.json();

    if (!airtableResponse.ok) {
      console.error("Airtable error:", JSON.stringify(result));
      return {
        statusCode: airtableResponse.status,
        headers,
        body: JSON.stringify({ error: "Failed to save lead", details: result }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        id: result.records?.[0]?.id || null,
      }),
    };
  } catch (error) {
    console.error("Lead capture error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to save lead" }),
    };
  }
};
