"use client";

import React, { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import { ImageUploadFieldProps } from "@/interfaces/inputs";
// Props definition

function ImageUploadField({
  label,
  name,
  handleImageUpload,
}: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the file selection and upload process.
   */
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset state
    setUploading(true);
    setError(null);

    // Show a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Prepare the file for upload
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send the file to our API route
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed. Please try again.");
      }

      const data = await response.json();
      const imageUrl = data.url;

      // Call the callback function with the field name and the returned URL
      handleImageUpload(name, imageUrl);
    } catch (err: any) {
      setError(err.message);
      setPreview(null); // Clear preview on error
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-neutral-400 px-6 py-10">
        <div className="text-center">
          {preview && !error ? (
            // Show the image preview
            <img
              src={preview}
              alt="Image preview"
              className="mx-auto h-48 w-auto rounded-lg"
            />
          ) : (
            // Show the upload icon and prompt
            <UploadCloud
              className="mx-auto h-12 w-12 text-neutral-400"
              aria-hidden="true"
            />
          )}

          <div className="mt-4 flex text-sm leading-6 text-neutral-400">
            <label
              htmlFor={name}
              className="relative cursor-pointer rounded-md font-semibold text-purple-400 focus-within:outline-none hover:text-purple-500"
            >
              <span>{uploading ? "Uploading..." : "Upload a file"}</span>
              <input
                id={name}
                name={name}
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif"
                disabled={uploading}
              />
            </label>
            {!uploading && <p className="pl-1">or drag and drop</p>}
          </div>

          {uploading ? (
            <Loader2 className="mx-auto mt-2 h-6 w-6 animate-spin text-neutral-400" />
          ) : (
            <p className="text-xs leading-5 text-neutral-500">
              PNG, JPG, GIF up to 10MB
            </p>
          )}

          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ImageUploadField;
