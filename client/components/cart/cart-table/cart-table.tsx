'use client';
import React from 'react';

import { Minus, Plus, X } from 'lucide-react';
import { useCartStore } from '@/lib/state';
import Image from 'next/image';

import CartTableHead from './cart-table-head';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';

const CartTable = () => {
  const cartItems = useCartStore((state) => state.items);
  const increaseCartItemQuanttiy = useCartStore((state) => state.increaseItemQuantity);
  const decreaseCartItemQuanttiy = useCartStore((state) => state.decreaseItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeItem);
  const { width } = useWindowSize();

  let isMobile = width! < 1024;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto h-[50vh] text-center">
        <h3 className="text-2xl font-bold">Your cart is empty</h3>
        <p className="text-gray-500 mt-2">Looks like you havent added any items to your cart yet.</p>
        <Link href="/products" className="mt-4 bg-primary-light text-white px-4 py-2 rounded-md">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <table className="w-full lg:w-[70%]">
      {!isMobile && <CartTableHead />}
      <tbody className="">
        {cartItems.map((product) => (
          <tr key={product.id} className="border-b border-gray-200  mb-4">
            <td className="p-4 cart-table-row">
              <button
                aria-label="remove item from cart"
                onClick={() => removeCartItem(product.id)}
                className="bg-primary-light text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </td>
            <td className="p-4 cart-table-row">
              <span className="font-bold block lg:hidden">Image:</span>
              <figure className="lg:w-12 lg:h-12 h-20 w-20">
                <Image
                  width={120}
                  height={100}
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
            </td>
            <td className="p-4 cart-table-row">
              <span className="font-bold block lg:hidden">Product:</span>
              {product.name}
            </td>
            <td className="p-4 cart-table-row">
              <span className="font-bold block lg:hidden">Price:</span>

              {Number(product.price).toFixed(2)}
            </td>
            <td className="p-4 font-bold cart-table-row">
              <span className="font-bold block lg:hidden">Quantity:</span>
              <div className=" flex items-center gap-3">
                <button
                  aria-label="decrease quantity"
                  onClick={() => decreaseCartItemQuanttiy(product.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300"
                >
                  <Minus size={14} />
                </button>
                {product.cartItemQuantity}
                <button
                  aria-label="increase quantity"
                  onClick={() => increaseCartItemQuanttiy(product.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300"
                >
                  <Plus size={14} />
                </button>
              </div>
            </td>
            <td className="p-4 font-bold cart-table-row">
              <span className="font-bold block lg:hidden">Subtotal:</span>$
              {(product.cartItemQuantity * Number(product.price)).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
