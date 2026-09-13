import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

const BUCKET = "product-files";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const slug = formData.get("slug");
  const version = formData.get("version");

  if (!(file instanceof File) || typeof slug !== "string" || typeof version !== "string") {
    return NextResponse.json({ error: "Missing file, slug, or version" }, { status: 400 });
  }

  const path = `${slug}/v${version}/${file.name}`;

  const { error } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(path, file, { upsert: true, contentType: file.type });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    storagePath: path,
    fileLabel: `${file.name.split(".").pop()?.toUpperCase()}, ${(file.size / (1024 * 1024)).toFixed(1)} MB`,
  });
}
