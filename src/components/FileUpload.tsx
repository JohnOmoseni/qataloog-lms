"use client";

import { ChangeEvent, useState } from "react";
import { useToast } from "./ui/use-toast";
import { convertFileToUrl, toastNotify } from "@/lib/utils";
import { Button } from "./CustomButton";
import { fallback_img, remove as Remove } from "@/constants/icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (
        !["image/jpeg", "image/png", "image/svg+xml"].includes(
          selectedFile.type,
        )
      ) {
        alert("Please select a JPG, PNG, or SVG file.");
        toastNotify(toast, "Please select a JPG, PNG, or SVG file.");
        return;
      }
      if (selectedFile.size > 4 * 1024 * 1024) {
        alert("File size must be less than 4MB.");
        toastNotify(toast, "File size must be less than 4MB.");
        return;
      }

      setIsUploading(true);
      setFile(selectedFile);

      setPreview(convertFileToUrl(selectedFile));

      setIsUploading(false);
    }
  };

  return (
    <div className="sm:row-flex-start flex flex-col gap-6">
      <div className="group relative h-52 w-52 overflow-hidden rounded-full p-1 shadow-inner outline outline-border-variant clip-circle max-sm:mx-auto">
        <Image
          src={preview! || fallback_img}
          alt="profile"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex-column gap-3">
        <Input
          id="uploadImage"
          type="file"
          accept="image/jpeg, image/png, image/svg+xml"
          onChange={handleFileChange}
          className="hidden"
        />
        <Label htmlFor="uploadImage" className="btn-variant cursor-pointer">
          {isUploading ? "Uploading..." : "Upload new picture"}
        </Label>

        <Button
          title="Remove"
          btnType="outline"
          icon={Remove}
          onClick={() => setPreview(null)}
        />
      </div>
    </div>
  );
}

export default FileUpload;
