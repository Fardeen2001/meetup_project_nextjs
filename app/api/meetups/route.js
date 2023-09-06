import { connectionStr } from "@/app/lib/db";
import { Meetup } from "@/app/lib/modal/meetup";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  let meetupData = [];
  try {
    await mongoose.connect(connectionStr);
    meetupData = await Meetup.find();
  } catch (error) {}
  return NextResponse.json({ result: meetupData, success: true });
}

export async function POST(req, res) {
  try {
    const { title, image, address, description } = await req.json();

    await mongoose.connect(connectionStr);
    let meetup = new Meetup({
      title: "third",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      address: "pavagada",
      description: "testing here",
    });
    const result = await meetup.save();
    return NextResponse.json({ result, status: 200, success: true });
  } catch (error) {}
}
