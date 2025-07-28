"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IProduct } from "../interface";
import {Link, Pagination, Stack } from "@mui/material";


export default function AllProductsCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setLoading(true);
    setPage(value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {products.map((product: IProduct) => (
        <Link
          href={`/Product/${product.id}`}
          key={product.id}
          style={{ textDecoration: "none" }}
          className="transition-transform hover:scale-105"
        >
          <Card sx={{ maxWidth: 345, height: "100%", background: "#F3F3F3" }}>
            <CardMedia
              component="img"
              height="100"
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
              <br />
              <Typography>$ {product.price}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
      <Stack spacing={1} mt={2} alignItems="center" width="100%">
        <Pagination
          count={totalPages}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { IProduct } from "@/interface";
// import Link from "next/link";
// import { Card, CardContent, CardMedia, Typography, Pagination, Stack } from "@mui/material";

// export default function AllProductsPage() {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const limit = 10;
//     const skip = (page - 1) * limit;
//     fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / limit));
//       });
//   }, [page]);

//   return (
//     <div className="p-4 flex flex-wrap gap-4 justify-center">
//       {products.map((product) => (
//         <Link key={product.id} href={`/product/${product.id}`}>
//           <Card sx={{ width: 250, height: "100%", cursor: "pointer", bgcolor: "#f5f5f5" }}>
//             <CardMedia component="img" height="140" image={product.thumbnail} alt={product.title} />
//             <CardContent>
//               <Typography variant="h6">{product.title}</Typography>
//               <Typography variant="body2">{product.description}</Typography>
//               <Typography fontWeight="bold">${product.price}</Typography>
//             </CardContent>
//           </Card>
//         </Link>
//       ))}
//       <Stack spacing={2} mt={4} alignItems="center" width="100%">
//         <Pagination count={totalPages} page={page} onChange={(_, value) => setPage(value)} />
//       </Stack>
//     </div>
//   );
// }
