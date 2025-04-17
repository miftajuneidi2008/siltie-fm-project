// app/api/image/route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imagePath = searchParams.get("path");


  if (!imagePath) {
    return NextResponse.json(
      { error: "Image path is required" },
      { status: 400 }
    );
  }

  try {
    const fullPath = path.join(process.cwd(), decodeURIComponent(imagePath));

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const imageBuffer = fs.readFileSync(fullPath);

    let contentType = "image/png";
    if (imagePath.endsWith(".jpg") || imagePath.endsWith(".jpeg")) {
      contentType = "image/jpeg";
    } else if (imagePath.endsWith(".gif")) {
      contentType = "image/gif";
    } else if (imagePath.endsWith(".webp")) {
      contentType = "image/webp";
    }

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
