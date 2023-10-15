import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { CartTotal, TableHead } from '@/components/cart';
import { Button } from '@/components/ui';

const cartProductsData = [
  {
    id: 1,
    name: 'Organic Bananas',
    slug: 'organic-bananas',
    price: 22.0,
    description:
      'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    quantity: 22,
    gallery: [
      {
        id: 1,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 2,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 3,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        id: 4,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Fruits & Vegetable',
        slug: 'fruits-vegetable',
      },
    ],
    reviews: 4,
    discount: 0,
    imageURL:
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  },
  {
    id: 2,
    name: 'Organic Bananas',
    slug: 'organic-bananas',
    price: 22.0,
    description:
      'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    quantity: 22,
    gallery: [
      {
        id: 1,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 2,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 3,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        id: 4,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Fruits & Vegetable',
        slug: 'fruits-vegetable',
      },
    ],
    reviews: 4,
    discount: 0,
    imageURL:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  },
];

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* PRODUCTS */}
        <table className="w-full lg:w-[60%] ">
          <tbody className="">
            {/* <TableHead /> */}
            {cartProductsData.map((product) => (
              <tr key={product.id} className="border-b border-gray-200  mb-4">
                <td className="p-4 cart-table-row">
                  <button className="bg-primary-light text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <X size={18} />
                  </button>
                </td>
                <td className="p-4 cart-table-row">
                  <span className="font-bold block lg:hidden">Image:</span>
                  <figure className="lg:w-12 lg:h-12 h-20 w-20">
                    <Image
                      width={120}
                      height={100}
                      src={product.imageURL}
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

                  {product.price}
                </td>
                <td className="p-4 font-bold cart-table-row">
                  <span className="font-bold block lg:hidden">Quantity:</span>
                  <div className=" flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300">
                      <Minus size={14} />
                    </button>
                    {product.quantity}
                    <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300">
                      <Plus size={14} />
                    </button>
                  </div>
                </td>
                <td className="p-4 font-bold cart-table-row">
                  <span className="font-bold block lg:hidden">Subtotal:</span>
                  {product.quantity * product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
