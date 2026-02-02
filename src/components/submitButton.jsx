"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label, handleSubmit }) {
  const { pending } = useFormStatus();
  console.log(pending, "pending");
  return (
    <button
      type="submit"
      className="text-white cursor-pointer border-none rounded px-3 py-2 mt-4 bg-green-600 hover:bg-green-700"
      disabled={pending}
    >
      Add Product
    </button>
  );
}
