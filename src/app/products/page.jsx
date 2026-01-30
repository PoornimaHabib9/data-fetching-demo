import Link from "next/link";
import { getProducts } from "../prisma-db";
import DeleteButton from "../components/deleteButton";

export default async function Products() {
  const products = await getProducts();

  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left", margin: "20px 0" }}>Product List</h1>
        <Link
          href="/products/add-product"
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add New Product
        </Link>
      </div>

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              padding: "15px",
              margin: "20px 0px",
              border: "1px solid #ccc",
              boxShadow: "2px 2px 12px #aaa",
              listStyle: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div>
                <Link
                  style={{
                    padding: "8px",
                    marginRight: "10px",
                    backgroundColor: "#ffc107",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  href={`/products/edit-product/${product.id}`}
                >
                  Edit
                </Link>
                <DeleteButton productId={product.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
