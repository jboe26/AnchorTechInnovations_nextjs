"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";

const inputClass =
  "w-full rounded-md border border-anchor-slate/30 px-4 py-3 text-anchor-ink outline-none transition focus:border-anchor-deep";
const labelClass = "mb-1.5 block font-mono text-xs tracking-wider text-anchor-slate";

export default function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const isEditing = Boolean(product);

  const [slug, setSlug] = useState(product?.slug ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [shortDescription, setShortDescription] = useState(product?.short_description ?? "");
  const [longDescription, setLongDescription] = useState(product?.long_description ?? "");
  const [price, setPrice] = useState(product ? (product.price_cents / 100).toString() : "");
  const [version, setVersion] = useState(product?.version ?? "1.0");
  const [active, setActive] = useState(product?.active ?? true);
  const [storagePath, setStoragePath] = useState(product?.storage_path ?? "");
  const [fileLabel, setFileLabel] = useState(product?.file_label ?? "");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    if (!slug || !version) {
      setError("Set the slug and version before uploading the file.");
      return;
    }
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("slug", slug);
    formData.append("version", version);

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error ?? "Upload failed.");
      setUploading(false);
      return;
    }

    setStoragePath(json.storagePath);
    setFileLabel(json.fileLabel);
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const priceCents = Math.round(Number(price) * 100);
    if (!Number.isFinite(priceCents) || priceCents <= 0) {
      setError("Enter a valid price.");
      setSubmitting(false);
      return;
    }
    if (!storagePath) {
      setError("Upload the product file before saving.");
      setSubmitting(false);
      return;
    }

    const payload = {
      slug,
      name,
      short_description: shortDescription,
      long_description: longDescription,
      price_cents: priceCents,
      currency: "usd",
      active,
      storage_path: storagePath,
      file_label: fileLabel,
      version,
    };

    const res = await fetch(
      isEditing ? `/api/admin/products/${product!.id}` : "/api/admin/products",
      {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const json = await res.json();

    if (!res.ok) {
      setError(json.error ?? "Save failed.");
      setSubmitting(false);
      return;
    }

    router.push("/admin/products");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          pattern="[a-z0-9-]+"
          title="Lowercase letters, numbers, and hyphens only"
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>short description</label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
          rows={2}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>long description</label>
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
          rows={4}
          className={inputClass}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>price (USD)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>product file</label>
        {storagePath && (
          <p className="mb-2 font-mono text-xs text-anchor-ink/60">
            Currently: {storagePath} ({fileLabel})
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="text-sm"
          />
          <button
            type="button"
            onClick={handleUpload}
            disabled={!file || uploading}
            className="rounded-md border border-anchor-deep px-4 py-2 text-sm font-semibold text-anchor-deep transition hover:bg-anchor-deep/5 disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload to bucket"}
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-anchor-ink">
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
        Active (visible in the catalog)
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-anchor-deep px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Saving..." : isEditing ? "Save changes" : "Create product"}
      </button>
    </form>
  );
}
