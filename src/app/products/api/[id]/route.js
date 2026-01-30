import { deleteProductById, getProductById, updateProduct } from "@/app/prisma-db";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
    const {id} = await context.params;
    const body = await request.json();
    await updateProduct({id, ...body});
    return new NextResponse(JSON.stringify({ message: 'Product updated successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function GET(request, context) {
    const {id} = await context.params;
    const product = await getProductById(id);
    return new NextResponse(JSON.stringify(product), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(request, context) {
    const {id} = await context.params;
    const product = await deleteProductById(id);
    return new NextResponse(JSON.stringify(product), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}