"use client";

import FormComponent from "@/components/formComponent";
import { redirect } from "next/navigation";

export default function AddProduct() {

  const handleSubmit = async ({title, description, price}) => {
    if (!title || !description || !price) {
      alert("Please fill in all fields.");
      return;
    }
    const resp = await fetch("/products/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price }),
    });
    await resp.json();
    alert("Product added successfully!");
    redirect('/products');
  };

  return (
    <div className="m-3 text-center p-3">
      <FormComponent label="Add New Product" handleSubmit={handleSubmit} />
    </div>
  );
}
