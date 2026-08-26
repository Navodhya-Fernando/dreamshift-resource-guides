const { MongoClient } = require("mongodb");

let client;
let clientPromise;

const getClient = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI");
  }

  if (!clientPromise) {
    client = new MongoClient(process.env.MONGODB_URI);
    clientPromise = client.connect();
  }

  await clientPromise;
  return client;
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, industry, sourceUrl } = JSON.parse(event.body || "{}");

    if (!name || !email) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const dbName = process.env.MONGODB_DB || "dreamshift";
    const collectionName = process.env.MONGODB_COLLECTION || "leads";
    const mongoClient = await getClient();
    const collection = mongoClient.db(dbName).collection(collectionName);

    const result = await collection.insertOne({
      name,
      email,
      industry: industry || "general",
      sourceUrl: sourceUrl || null,
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, id: result.insertedId }),
    };
  } catch (error) {
    console.error("Lead capture error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to save lead" }),
    };
  }
};
