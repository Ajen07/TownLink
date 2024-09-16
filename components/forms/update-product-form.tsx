"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

function UpdateProductForm() {
  const id = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/product/add", product);
      console.log("Product added", response.data);
      toast.success("Product added", { position: "top-right" });
      router.push("/inventory");
    } catch (error: any) {
      console.log("Product addition failed", error);
      toast.error(error?.response?.data?.error || "Something went wrong", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  async function getProductData() {}

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            value={product.stock}
            onChange={(e) =>
              setProduct({ ...product, stock: Number(e.target.value) })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
export default UpdateProductForm;
