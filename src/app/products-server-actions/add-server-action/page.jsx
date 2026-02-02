'use client';

import React from 'react'
import handleSubmit from "@/actions/products";
import Link from "next/link";
import { useActionState } from "react";

export default function ProductAddServerAction() {
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    title: "",
    description: "",
    price: "",
    errors: {},
  });

  return (
    <form action={formAction} className="flex flex-col max-w-500 justify-self-center p-5 m-5 border shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <div className="text-left">
        <label className="mb-5">
          <b>Title</b>
          <input
            type="text"
            name="title"
            defaultValue={state.title}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {state.errors.title && <p className="text-red-700">{state.errors.title}</p>}
      </div>
      <div className="text-left">
        <label className="mb-5">
          <b>Description</b>
          <textarea
            name="description"
            defaultValue={state.description}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {state.errors.description && (
          <p className="text-red-700">{state.errors.description}</p>
        )}
      </div>
      <div className="text-left">
        <label className="mb-5">
          <b>Price</b>
          <input
            type="number"
            name="price"
            defaultValue={state.price}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {state.errors.price && <p className="text-red-700">{state.errors.price}</p>}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="text-white cursor-pointer border-none rounded px-3 py-2 mt-4 bg-green-600 hover:bg-green-700 disabled:opacity-50"
      >
        Add Product
      </button>
      <div className="mt-2">
        <Link
          className="underline text-blue-600 hover:text-blue-800"
          href={"/products-server-actions"}
        >
          Back to Products
        </Link>
      </div>
    </form>
  );
}
