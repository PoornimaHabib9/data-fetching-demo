"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FormComponent({
  label,
  handleSubmit,
  initialData = {},
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [price, setPrice] = useState(initialData?.price || "");

  useEffect(() => {
    if (!initialData) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitle(initialData.title || "");
    setDescription(initialData.description || "");
    setPrice(initialData.price ?? "");
  }, [initialData]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, { title, description, price })}
      className="flex flex-col max-w-500 justify-self-center p-5 m-5 border shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">{label}</h1>
      <label className="mb-5 text-left">
        <b>Title</b>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-950 rounded"
        />
      </label>
      <label className="mb-5 text-left">
        <b>Description</b>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-950 rounded"
        />
      </label>
      <label className="mb-5 text-left">
        <b>Price</b>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-950 rounded"
        />
      </label>
      <button
        type="submit"
        className="text-white cursor-pointer border-none rounded px-3 py-2 mt-4 bg-green-600 hover:bg-green-700"
      >
        {label}
      </button>
      <div className="mt-2">
        <Link
          className="underline text-blue-600 hover:text-blue-800"
          href={"/products"}
        >
          Back to Products
        </Link>
      </div>
    </form>
  );
}
