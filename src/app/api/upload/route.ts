// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// File size limit (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Allowed file types
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

/**
 * POST handler for image uploads to Cloudinary
 * Endpoint: /api/upload
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await request.formData();
    const file = formData.get("file") as File;

    // Validation: Check if file exists
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded. Please select an image." },
        { status: 400 }
      );
    }

    // Validation: Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only PNG, JPG, and GIF are allowed." },
        { status: 400 }
      );
    }

    // Validation: Check file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit." },
        { status: 400 }
      );
    }

    // Convert the file to a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload the buffer to Cloudinary using upload_stream
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "devhance_stories", // Cloudinary folder name
          resource_type: "auto", // Automatically detect file type
          transformation: [
            { quality: "auto" }, // Optimize quality
            { fetch_format: "auto" }, // Optimize format
          ],
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Write the buffer to the upload stream
      uploadStream.end(buffer);
    });

    // Return success response with the image URL
    return NextResponse.json(
      {
        success: true,
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Upload error:", error);

    // Handle specific Cloudinary errors
    if (error.http_code) {
      return NextResponse.json(
        { error: `Cloudinary error: ${error.message}` },
        { status: error.http_code }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: `Upload failed: ${error.message || "Unknown error occurred"}` },
      { status: 500 }
    );
  }
}

// Optional: GET handler to check if the API is working
export async function GET() {
  return NextResponse.json(
    {
      message: "Image upload API is running",
      endpoint: "/api/upload",
      method: "POST",
      maxFileSize: "10MB",
      allowedTypes: ["PNG", "JPG", "GIF"],
    },
    { status: 200 }
  );
}
