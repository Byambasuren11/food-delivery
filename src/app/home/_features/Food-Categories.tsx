"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Foods } from "./Foods";

export const FoodCategories = () => {
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    const response = await axios.get("http://localhost:4007/food-category");
    console.log(response.data.data);
    setCategories(response.data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="flex w-4/5 flex-col gap-5 mt-5">
        <div className="text-2xl text-white">Categories</div>
        <div className="flex gap-3">
          {categories?.map((element, index) => {
            return (
              <Button key={index} className="text-black bg-white rounded-2xl">
                {element.categoryName}
              </Button>
            );
          })}
        </div>
        <div>
          <Foods categories={categories} />
        </div>
      </div>
    </>
  );
};
