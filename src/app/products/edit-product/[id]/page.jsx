"use client";

import FormComponent from "@/app/components/formComponent";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch(`/products/api/${id}`);
      const data = await resp.json();
      console.log(data);
      setData(data);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    const resp = await fetch(`/products/api/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        price: data.price,
      }),
    });
    await resp.json();
    alert("Product updated successfully!");
    window.location.href = "/products";
  };

  return (
    <div className="m-5 text-center p-5">
      {data ? (
        <FormComponent
          label="Update Product"
          handleSubmit={handleSubmit}
          initialData={data}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
