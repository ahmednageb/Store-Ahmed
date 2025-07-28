// "use client";
// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
// import { useRouter } from "next/router";
// import { IProduct } from "@/interface";
// import { getCart, removeFromCart, clearCart } from "../../utils/cart";
// import { useEffect, useState } from "react";

// export default function ShoppingBag(todos: { todos: IProduct[] }) {
//   const currency = process.env.NEXT_PUBLIC_CURRENCY;
//   const router = useRouter();
//   const fetchProductData = async () => {
//     // Fetch your todos data here, for example from an API
//     const response = await fetch(""); // Replace with your actual API endpoint
//     const todos = await response.json();
//     setProducts(todos);
//   };

//   const [products, setProducts] = useState<IProduct[]>([]);

//   useEffect(() => {
//     setProducts(getCart());
//   }, []);

//   const grandTotal = products.reduce(
//     (sum, p) => sum + p.price * (p.quantity || 1),
//     0
//   );
//   return (
//     <div className="mb-10 h-full">
//       <div
//         style={{ backgroundColor: "#2F333A", height: 240, width: "full" }}
//         className="text-center flex justify-center items-center font-bold"
//       >
//         <h1
//           style={{ color: "#FFFFFF", font: "Raleway", fontSize: 36 }}
//           className=""
//         >
//           SHOPPING BAG
//         </h1>
//       </div>
//       <div className="container mx-auto mt-10">
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 600 }} aria-label="spanning table">
//             <TableHead>
//               <TableRow style={{ backgroundColor: "#F4F5F8" }}>
//                 <TableCell align="center">Image</TableCell>
//                 <TableCell align="center">Product</TableCell>
//                 <TableCell align="center">Price</TableCell>
//                 <TableCell align="center">Qty</TableCell>
//                 <TableCell align="center">Subtotal</TableCell>
//                 <TableCell align="center">Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product: IProduct) => (
//                 <TableRow key={product.id}>
//                   <TableCell align="center">{product.thumbnail}</TableCell>
//                   <TableCell align="center">{product.title}</TableCell>
//                   <TableCell align="center">{product.price}</TableCell>
//                   <TableCell align="center">{product.quantity}</TableCell>
//                   <TableCell align="center">
//                     {product.price * (product.quantity || 0)}
//                   </TableCell>
//                   <TableCell align="center">
//                     <Button
//                       variant="outlined"
//                       color="error"
//                       onClick={() => {
//                         removeFromCart(product.id as string);
//                         setProducts(getCart()); // إعادة تحديث القائمة
//                       }}
//                     >
//                       حذف
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}

//               <TableRow style={{ backgroundColor: "#F4F5F8" }}>
//                 <TableCell
//                   colSpan={6}
//                   align="right"
//                   style={{ paddingRight: 20, fontSize: 20, fontWeight: "bold" }}
//                 >
//                   Grand Total: ${grandTotal}
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//       <div className="container mx-auto mt-10 bg-gray-300 h-22 items-center flex justify-end p-6">
//         <Button variant="contained" color="warning" size="large">
//           <Link color="white" underline="hover">
//             All Products
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/interface";
import { getCart, removeFromCart, clearCart } from "@/utils/cart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

export default function ShoppingBag() {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">عربة التسوق</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>الصوره</TableCell>
              <TableCell>المنتج</TableCell>
              <TableCell align="center">الكمية</TableCell>
              <TableCell align="center">السعر</TableCell>
              <TableCell align="center">الإجمالي</TableCell>
              <TableCell align="center">إجراء</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.thumbnail} alt={item.title} className="w-25" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">${item.price}</TableCell>
                <TableCell align="center">
                  ${item.price * (item.quantity || 1)}
                </TableCell>
                <TableCell align="center">
                  <Button
                    color="error"
                    onClick={() => {
                      removeFromCart(item.id as number);
                      setCart(getCart());
                    }}
                  >
                    حذف
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                <strong>المجموع الكلي</strong>
              </TableCell>
              <TableCell align="center">
                <strong>${total}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-end mt-4 gap-4">
        <Button
          variant="outlined"
          onClick={() => {
            clearCart();
            setCart([]);
          }}
        >
          تفريغ السلة
        </Button>
        <Button variant="contained" color="primary">
          الدفع
        </Button>
      </div>
    </div>
  );
}
