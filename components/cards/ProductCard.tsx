"use client";

import { Product } from "@/types/Product";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const onUpdate = () => {
    router.push(`/dashboard/inventory/update/${product.id}`);
  };
  return (
    <div
      key={product.id}
      className="border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-green-600">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-gray-800">Stock: {product.stock}</p>
      {/* <p className="text-blue-600 mt-2">Category: {product.category}</p>{" "} */}
      {/* New Category Section */}
      <Button
        onClick={onUpdate}
        className="mt-4"
        type="submit"
        variant="primaryTheme"
      >
        Update
      </Button>
    </div>
  );
};
export default ProductCard;
