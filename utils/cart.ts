import { IProduct } from "@/interface";

const CART_KEY = "shopping_cart";

export function getCart(): IProduct[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addToCart(product: IProduct, quantity: number = 1) {
  const cart = getCart();
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(productId: number) {
  const cart = getCart().filter((p) => p.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
