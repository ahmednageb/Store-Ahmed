"use client";

import { IProduct } from "@/interface";
import { useState } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductList({ products }: { products: IProduct[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full max-w-md mb-4"
      />

      {filtered.length === 0 ? (
        <Typography variant="h6">No products match your search</Typography>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/Product/${product.id}`}
              className="no-underline transition-transform hover:scale-105"
            >
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.thumbnail}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div" noWrap>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
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
