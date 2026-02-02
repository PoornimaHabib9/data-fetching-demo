import { getProductById } from "@/app/prisma-db";
import EditProductForm from "./edit-product-form";
import { notFound } from "next/navigation";

export default async function EditProduct({params}) {
    const {id} = await params;
    const productData = await getProductById(id);

    if(!productData) notFound();
    return (
        <EditProductForm productData={productData} />
    )
}