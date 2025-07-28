// "use client";
// import * as React from "react";
// import { IProduct } from "@/interface";
// import Badge from "@mui/material/Badge";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import MailIcon from "@mui/icons-material/Mail";
// import { useEffect, useState } from "react";
// import { addToCart } from "@/utils/cart";
// import { useRouter } from "next/router";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default function ProductPage({ params }: PageProps) {
//   const { id } = params;
//   const [data, setData] = useState<IProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [count, setCount] = useState(1);
//   const router = useRouter();

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then(setData);
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!data) return <div>No product found</div>;
//   const handleAdd = () => {
//     addToCart(data, count);
//     alert("تمت الإضافة إلى السلة!");
//     router.push("/shopping-bag");
//   };

//   return (
//     <div className="container columns-2 mt-10 flex-col justify-center items-center h-full">
//       <div>
//         <img src={data.thumbnail} alt={data.title} width={500} />
//       </div>
//       <div className="flex flex-col justify-center p-4 gap-5">
//         <h1 className="text-3xl font-bold">{data.title}</h1>
//         <p className="text-3xl font-bold">${data.price}</p>
//         <p>{data.description}</p>
//       </div>

//       <div className="flex items-center ">
//         <div className="border-2 border-b-gray-900 rounded-md w-fit mr-2.5">
//           <ButtonGroup
//             variant="text"
//             color="inherit"
//             aria-label="Basic button group"
//           >
//             <Button
//               aria-label="reduce"
//               onClick={() => {
//                 setCount(Math.max(count - 1, 1));
//               }}
//             >
//               <RemoveIcon fontSize="large" color="action" />
//             </Button>

//             <Button sx={{ width: 60 }}>
//               <Badge
//                 badgeContent={count}
//                 sx={{
//                   "& .MuiBadge-badge": {
//                     fontSize: 20,
//                     height: 30,
//                     minWidth: 30,
//                     transform: "none", // Remove default transform
//                     position: "relative", // Position normally
//                   },
//                 }}
//               >
//                 {/* Empty child since we just want the badge */}
//                 <span></span>
//               </Badge>
//             </Button>
//             <Button
//               aria-label="increase"
//               onClick={() => {
//                 setCount(count + 1);
//               }}
//             >
//               <AddIcon fontSize="large" color="action" />
//             </Button>
//           </ButtonGroup>
//         </div>
//         <Button
//           variant="contained"
//           color="warning"
//           size="large"
//           onClick={handleAdd}
//         >
//           <h1>Add to Product</h1>
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "@/interface";
import { addToCart } from "@/utils/cart";
import { Button, ButtonGroup, Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAdd = () => {
    addToCart(product, count);
    alert("تمت الإضافة إلى السلة!");
    router.push("/ShoppingBag");
  };

  return (
    <div className="container columns-2 mt-10 flex-col justify-center items-center h-full">
      <img src={product.thumbnail} alt={product.title} width={500} />
      <div>
        <div className="flex flex-col justify-center p-4 gap-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p>{product.description}</p>
          <p className="text-xl font-bold text-green-600">${product.price}</p>
        </div>

        <div className="flex items-center ">
          <div className="border-2 border-b-gray-900 rounded-md w-fit mr-2.5">
            <ButtonGroup
              variant="text"
              color="inherit"
              aria-label="Basic button group"
            >
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon fontSize="large" color="action" />
              </Button>

              <Button sx={{ width: 60 }}>
                <Badge
                  badgeContent={count}
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 20,
                      height: 30,
                      minWidth: 30,
                      transform: "none", // Remove default transform
                      position: "relative", // Position normally
                    },
                  }}
                >
                  {/* Empty child since we just want the badge */}
                  <span></span>
                </Badge>
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="large" color="action" />
              </Button>
            </ButtonGroup>
          </div>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleAdd}
          >
            <h1>Add to Product</h1>
          </Button>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import * as React from "react";
// import { IProduct } from "@/interface";
// import Badge from "@mui/material/Badge";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useEffect, useState } from "react";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default function ProductPage({ params }: PageProps) {
//   const { id } = params;
//   const [data, setData] = useState<IProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const productData = await response.json();
//         setData(productData);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!data) return <div>No product found</div>;

//   return (
//     <div className="container columns-2 mt-10 flex-col justify-center items-center h-full">
//       <div>
//         <img src={data.thumbnail} alt={data.title} width={500} />
//       </div>
//       <div className="flex flex-col justify-center p-4 gap-5">
//         <h1 className="text-3xl font-bold">{data.title}</h1>
//         <p className="text-3xl font-bold">${data.price}</p>
//         <p>{data.description}</p>
//       </div>

//       <div className="flex items-center ">
//        <div className="border-2 border-b-gray-900 rounded-md w-fit mr-2.5">
//           <ButtonGroup
//             variant="text"
//             color="inherit"
//             aria-label="Basic button group"
//           >
//             <Button
//               aria-label="reduce"
//               onClick={() => {
//                 setCount(Math.max(count - 1, 1));
//               }}
//             >
//               <RemoveIcon fontSize="large" color="action" />
//             </Button>

//             <Button sx={{ width: 60 }}>
//               <Badge
//                 badgeContent={count}
//                 sx={{
//                   "& .MuiBadge-badge": {
//                     fontSize: 20,
//                     height: 30,
//                     minWidth: 30,
//                     transform: "none", // Remove default transform
//                     position: "relative", // Position normally
//                   },
//                 }}
//               >
//                 {/* Empty child since we just want the badge */}
//                 <span></span>
//               </Badge>
//             </Button>
//             <Button
//               aria-label="increase"
//               onClick={() => {
//                 setCount(count + 1);
//               }}
//             >
//               <AddIcon fontSize="large" color="action" />
//             </Button>
//           </ButtonGroup>
//         </div>
//         <Button variant="contained" color="warning" size="large">Add to Product</Button>
//       </div>
//    </div>
//   );
// }
