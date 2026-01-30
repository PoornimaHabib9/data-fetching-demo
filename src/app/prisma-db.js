import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

const seedProducts = async () => {
    const products = [
    { title: 'Product A', price: 29.99, description: 'Description for Product A' },
    { title: 'Product B', price: 49.99, description: 'Description for Product B' },
    { title: 'Product C', price: 19.99, description: 'Description for Product C' },
  ];
    const count = await prisma.product.count();
    if(count === 0) {
        await prisma.product.createMany({
            data: products
        })
    }
}

seedProducts();

export async function getProducts() {
    return await prisma.product.findMany();
}

export async function getProductById(id) {
    return await prisma.product.findUnique({
        where: { id: Number(id) }
    });
}

export async function addProduct({title, price, description}) {
    return await prisma.product.create({
        data: {
            title,
            price: parseInt(price, 10),
            description
        }
    });
}

export async function updateProduct({id, title, price, description}) {
    return await prisma.product.update({
        where: { id: Number(id) },
        data: {
            title,
            price: parseInt(price, 10),
            description
        }
    });
}

export async function deleteProductById(id) {
    return await prisma.product.delete({
        where: { id: Number(id) }
    });
}