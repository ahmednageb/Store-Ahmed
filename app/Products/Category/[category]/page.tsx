import { notFound } from "next/navigation";
import ProductList from "./ProductList";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) return notFound();

  const data = await res.json();

  if (!data.products || data.products.length === 0) {
    return <div>No products found in this category</div>;
  }

  return <ProductList products={data.products} />;
}
