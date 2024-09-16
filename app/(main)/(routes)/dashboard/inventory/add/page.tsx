"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddProductForm from "@/components/forms/add-product-form";

const AddProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(), // Generate a unique ID for the new product
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      image,
      category,
    };

    // In a real application, you would send this data to your server
    // For example, using fetch or axios to make a POST request

    console.log("New Product:", newProduct);

    // Redirect to inventory page after adding the product
    router.push("/inventory");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
