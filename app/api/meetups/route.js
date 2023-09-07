import { connectionStr } from "@/app/lib/db";
import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  const { title, image, address, description } = await req.json();

  const client = await MongoClient.connect(connectionStr);
  const db = client.db();
  const meetupsCollection = db.collection("meet");
  const result = await meetupsCollection.insertOne({
    title,
    image,
    address,
    description,
  });
  client.close();

  return NextResponse.json(
    { title, image, address, description },
    { status: 201 }
  );
}

export async function GET(request) {
  let result = [];
  const client = await MongoClient.connect(connectionStr);
  const db = client.db();
  const meetupsCollection = db.collection("meet");
  result = await meetupsCollection.find().toArray();
  client.close();

  return NextResponse.json({ result }, { status: 201 });
}
