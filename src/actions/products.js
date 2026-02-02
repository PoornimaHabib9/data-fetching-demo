'use server';

import { addProduct, deleteProductById, updateProduct } from "@/app/prisma-db";
import { redirect } from "next/navigation";

export default async function handleSubmit(prevState,formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");

    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!description) errors.description = "Description is required";
    if (!price) errors.price = "Price is required";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await addProduct({ title, description, price: parseFloat(price) });
    redirect("/products-server-actions");
}


export async function handleUpdate(prevState,formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");

    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!description) errors.description = "Description is required";
    if (!price) errors.price = "Price is required";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await updateProduct({ id: prevState.id, title, price: parseFloat(price), description });
    redirect("/products-server-actions");
}

export async function handleDelete(id) {
    await deleteProductById(id);
    redirect("/products-server-actions");
}