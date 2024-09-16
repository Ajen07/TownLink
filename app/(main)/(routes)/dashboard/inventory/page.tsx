import products from "@/data/products.json"; // Import the JSON file
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";

const Inventory = () => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Inventory</h1>
      <div className="mb-8 text-center">
        <Link
          href="/dashboard/inventory/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add new Product
        </Link>
      </div>
      {categories.map((category) => (
        <div key={category} className="mb-2">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Inventory;
