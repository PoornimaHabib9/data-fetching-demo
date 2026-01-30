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
      style={{
        padding: "8px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
}
