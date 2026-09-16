import type { MetadataRoute } from "next";
import { getActiveProducts } from "@/lib/products";

const BASE_URL = "https://anchortech.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/pricing",
    "/products",
    "/contact",
    "/privacy",
    "/terms",
    "/case-studies/speech-innovation-nc",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const products = await getActiveProducts();
  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(product.updated_at),
  }));

  return [...staticRoutes, ...productRoutes];
}
