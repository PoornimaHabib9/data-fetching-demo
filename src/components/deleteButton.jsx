"use client";

import React from "react";

export default function DeleteButton({ productId }) {
  const handleDeleteClick = async () => {
    try {
      await fetch(`/products/api/${productId}`, {
        method: "DELETE",
      });
      alert("Product deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="p-2 text-white bg-red-600 hover:bg-red-700 border-none rounded cursor-pointer"
    >
      Delete
    </button>
  );
}
