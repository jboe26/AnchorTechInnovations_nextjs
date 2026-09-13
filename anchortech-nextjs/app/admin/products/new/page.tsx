import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
        Add product
      </h1>
      <div className="mt-8">
        <ProductForm />
      </div>
    </main>
  );
}
