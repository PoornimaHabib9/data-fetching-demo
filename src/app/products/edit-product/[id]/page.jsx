'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct(params) {
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => { 
    const fetchProduct = async () => {
      const resp = await fetch(`/products/api/${id}`);
      const data = await resp.json();
      setTitle(data.title);
      setDescription(data.description);
      setPrice(data.price);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/products/api/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price }),
    });
    const data = await resp.json();
    alert("Product updated successfully!");
    window.location.href = "/products";

  };

  return (
    <div style={{ margin: "20px", textAlign: "center", padding: "20px" }}>
      <h1>Edit Product</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          justifySelf: "center",
          padding: "40px",
          margin: "20px",
          border: "1px solid #ccc",
          boxShadow: "2px 2px 12px #aaa",
        }}
      >
        <label style={{ marginBottom: "10px", textAlign: "left" }}>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px", textAlign: "left" }}>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px", textAlign: "left" }}>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update Product
        </button>
        <div style={{ marginTop: '10px' }}>
          <Link href={"/products"}>Back to Products</Link>
        </div>
      </form>
    </div>
  )
}