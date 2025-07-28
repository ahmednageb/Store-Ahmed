"use client";

import { IProduct } from "@/interface";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { notFound } from "next/navigation";
import { useState } from "react";

type PageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: PageProps) {
  try {
    const { category } = params;
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!response.ok) {
      return notFound();
    }

    const data = await response.json();

    if (!data.products || data.products.length === 0) {
      return <div>No products found in this category</div>;
    }

    // Client-side component for filtering
    function ProductList({ products }: { products: IProduct[] }) {
      const [searchTerm] = useState("");

      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div className="flex flex-col items-center gap-4 p-4">
          {filteredProducts.length === 0 ? (
            <Typography variant="h6">No products match your search</Typography>
          ) : (
            <div className="flex flex-wrap justify-center gap-4">
              {filteredProducts.map((product: IProduct) => (
                <Link
                  href={`/Product/${product.id}`}
                  key={product.id}
                  style={{ textDecoration: "none" }}
                  className="transition-transform hover:scale-105"
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: "100%",
                      bgcolor: "background.paper",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image={product.thumbnail}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return <ProductList products={data.products} />;
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
}
