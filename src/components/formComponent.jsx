"use client";
import Link from "next/link";
import { useState } from "react";

export default function FormComponent({
  label,
  handleSubmit,
  initialData = {
    errors: {},
  },
}) {
  const [title, setTitle] = useState(initialData.title ||"");
  const [description, setDescription] = useState(initialData.description ||"");
  const [price, setPrice] = useState(initialData.price ||"");
  const [errors, setErrors] = useState({});

  const onFormSubmit = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!price) newErrors.price = "Price is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    handleSubmit({
      title,
      description,
      price: Number(price),
    });
  };
  
  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-col max-w-500 justify-self-center p-5 m-5 border shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">{label}</h1>
      <div className="text-left">
        <label className="mb-5">
          <b>Title</b>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {errors.title && <p className="text-red-700">{errors.title}</p>}
      </div>
      <div className="text-left">
        <label className="mb-5">
          <b>Description</b>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {errors.description && (
          <p className="text-red-700">{errors.description}</p>
        )}
      </div>
      <div className="text-left">
        <label className="mb-5">
          <b>Price</b>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-950 rounded"
          />
        </label>
        {errors.price && <p className="text-red-700">{errors.price}</p>}
      </div>
      <button
        type="submit"
        // disabled={Object.keys(errors).length > 0}
        className="text-white cursor-pointer border-none rounded px-3 py-2 mt-4 bg-green-600 hover:bg-green-700 disabled:opacity-50"
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
