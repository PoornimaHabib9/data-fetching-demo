import { addProduct, updateProduct, getProductById } from "@/app/prisma-db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    console.log(body, 'body in api route');
    await addProduct(body);
    return new NextResponse(JSON.stringify({ message: 'Product added successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
