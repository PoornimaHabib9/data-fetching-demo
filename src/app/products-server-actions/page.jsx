import Link from "next/link";
import { deleteProductById, getProducts } from "../prisma-db";
import DeleteButton from "../../components/deleteButton";
import { handleDelete } from "@/actions/products";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="p-2 m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-left m-2 text-xl font-bold">Product List</h1>
        <Link
          href="/products-server-actions/add-product"
          className=" text-white cursor-pointer border-none rounded px-3 py-2 bg-green-600 hover:bg-green-700"
        >
          Add New Product
        </Link>
      </div>

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="p-5 my-5 bg-white border-solid  border-2 border-x-border shadow-lg list-none"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p>{product.description}</p>
                <p>
                  <span className="font-bold">Price:</span> ${product.price}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  className="text-white cursor-pointer border-none rounded p-2 mr-2 bg-amber-400 hover:bg-amber-700"
                  href={`/products-server-actions/edit-server-action/${product.id}`}
                >
                  Edit
                </Link>
                <form action={handleDelete.bind(null, product.id)}>
                  <button
                    className="p-2 text-white bg-red-600 hover:bg-red-700 border-none rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
