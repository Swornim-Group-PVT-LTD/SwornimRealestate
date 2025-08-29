"use client";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import styles from "./serviceLists.module.css";
import BASE_URL from "../urlConfig/urlConfig";
import SERVER_URL from "../urlConfig/serverUrl";
import Link from "next/link";
import type { CustomFlowbiteTheme } from "flowbite-react";

interface ServiceData {
  id: string;
  categoryCode: string;
  categoryTitle: string;
  thumbnailImagePath: string | null;
  status: boolean;
  deleted: boolean;
}

interface ProductList {
  id: string;
  categoryId: string;
  status: boolean;
}

const customTheme: CustomFlowbiteTheme["card"] = {
  img: {
    horizontal: {
      off: "rounded-t-lg object-cover aspect-[4/3]",
    },
  },
};

const ServiceLists: React.FC = () => {
  const [serviceLists, setServiceLists] = useState<ServiceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [products, setProducts] = useState<ProductList[]>([]);

  useEffect(() => {
    fetchData();
    fetchProduct();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/MenuCategory/CategoryList`);
      if (response.ok) {
        const data: ServiceData[] = await response.json();

        const processedData = data.map((service) => ({
          ...service,
          thumbnailImagePath: service.thumbnailImagePath
            ? service.thumbnailImagePath.replace(/~/g, "")
            : null,
        }));

        setServiceLists(processedData);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch data");
        setIsLoading(false);
        setFetchError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      setFetchError(true);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Product/ProductList`);
      if (response.ok) {
        const data: ProductList[] = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-14 mb-10 bg-white lg:relative z-10">
      <div className="lg:container lg:mx-auto lg:flex">
        <div className="lg:flex items-center lg:pr-8">
          <h2 className="lg:absolute lg:left-10 text-center text-3xl md:text-4xl font-bold text-blue-900 lg:[writing-mode:vertical-rl] lg:rotate-180">
            Our Services
          </h2>
        </div>

        <div className="lg:flex-1 pt-7 pb-7 px-4 sm:px-6 lg:px-8">
          {fetchError ? (
            <div className="text-red-500 mt-4 text-center">
              Failed to fetch services. Please try again later.
            </div>
          ) : isLoading ? (
            <div className="relative w-full h-64 flex justify-center items-center">
              <Spinner size="xl" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {serviceLists
                .filter((service) => service.status === true)
                .map((service) => (
                  <Link
                    href={`/services/serviceWiseProduct/${encodeURIComponent(
                      service.categoryTitle
                    )}/${service.id}`}
                    key={service.id}
                  >
                    <Card
                      imgSrc={
                        service.thumbnailImagePath
                          ? `${SERVER_URL}${service.thumbnailImagePath}`
                          : "/no-image.png"
                      }
                      className="h-50 hover:bg-[#F8BC4C] transition ease-in-out duration-500 border-none"
                      theme={customTheme}
                    >
                      <h5 className="font-semibold text-lg md:text-xl mb-2 text-black text-center group-hover:text-white">
                        {service.categoryTitle}
                      </h5>
                      {/* Uncomment if you want product count per category */}
                      {/* <p className="text-center">
                        Total:
                        <span className="font-bold ml-1">
                          {
                            products.filter(
                              (product) =>
                                product.status === true &&
                                product.categoryId === service.id
                            ).length
                          }
                        </span>
                      </p> */}
                    </Card>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceLists;