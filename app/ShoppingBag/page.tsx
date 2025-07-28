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
