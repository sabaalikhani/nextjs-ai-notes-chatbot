import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw Error("Pinecone API key not found");
}

const pinecone = new Pinecone({
  //   environment: "gcp-starter",
  apiKey,
});

export const notesIndex = pinecone.Index("nextjs-ai-chatbot");
