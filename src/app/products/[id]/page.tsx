"use client";
import React, { useEffect, useState } from "react";
import { getProductId } from "@/services/page";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import ButtonComponent from "@/components/core/Button";
import { useRouter } from "next/navigation";
import withAuth from "@/lib/hoc/withAuth";

interface Product {
  productName: string;
  description: string;
  imageURL: string;
  price: number;
  category: string;
  inStock: boolean;
  _id: string;
}

function Product() {
  const [productData, setProductData] = useState<Product>();
  const [loading , setLoading] = useState(false)
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  useEffect(() => {
    if (id) {
      fetchProductData(id);
    }
  }, [id]);

  const fetchProductData = async (_id: string) => {
    try {
      const response = await getProductId(_id);
      console.log("Response:", response);
      if (response && response.statusCode === 200) {
        const product = response.data;
        setProductData(product);
        toast.success("Product details Successfully Loaded");
      } else {
        toast.error("Error while fetching Product details");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="flex flex-col mt-10 text-black bg-white h-screen p-10">
      <div className="flex justify-between">
        <div className="text-5xl font-bold text-black">
          {productData?.productName}
        </div>
        <ButtonComponent
          label="Back"
          variant="contained"
          onClick={() => {
            router.push("/products");
          }}
        />
      </div>
      {productData ? (
        <div className="mt-10">
          <div className="flex flex-row bg-white border rounded-lg p-6 shadow-lg">
            <div className="w-1/3">
              <img
                src={productData.imageURL}
                alt={productData.productName}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-2/3 pl-6">
              <h2 className="text-2xl font-semibold text-black">
                {productData.productName}
              </h2>
              <p className="mt-4 text-gray-600">
                {productData.description
                  ? productData.description
                  : "No Description available"}
              </p>
              <div className="mt-4 text-lg flex gap-2">
                Category:
                <div className="text-gray-600">{productData.category}</div>
              </div>
              <div className="mt-4 text-lg flex gap-2">
                Price:
                <div className="text-gray-600">{productData.price}</div>
              </div>
              <div className="mt-4 text-lg flex gap-2">
                Stock:
                <div className="text-gray-600">
                  {productData.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>

              <ButtonComponent
                type="submit"
                variant="contained"
                size="medium"
                className="mt-10"
                label="Add to Cart"
                disabled= {loading}
                loading=  {loading}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-black">Loading product data...</div>
      )}
    </div>
  );
}

export default withAuth(Product);
