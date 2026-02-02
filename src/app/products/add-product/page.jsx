"use client";

import FormComponent from "@/app/components/formComponent";

export default function AddProduct() {

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    if (!data.title || !data.description || !data.price) {
      alert("Please fill in all fields.");
      return;
    }
    const resp = await fetch("/products/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: data.title, description: data.description, price: data.price }),
    });
    await resp.json();
    alert("Product added successfully!");
    window.location.href = "/products";
  };

  return (
    <div className="m-3 text-center p-3">
      <FormComponent label="Add New Product" handleSubmit={handleSubmit} />
    </div>
  );
}
