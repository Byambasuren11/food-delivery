"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Category = {
  categoryName: string;
  _id: string;
  foodCount: number;
};

export type Food = {
  category: string;
  image: string;
  foodName: string;
  price: number;
  ingredients: string;
  _id: string;
  quantity: number;
  basePrice: number;
};

type FoodsProps = {
  categories: Category[];
};

export const Foods = ({ categories }: FoodsProps) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [orderFoods, setOrderFoods] = useState<Food[]>(() => {
    const storedOrder =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("OrderFood")
        : "";
    return storedOrder ? JSON.parse(storedOrder) : [];
  });

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response = await axios.get("http://localhost:4007/food");
        setFoods(response.data.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
    getFoods();
  }, []);

  const handleAddToOrder = (id: string) => {
    const selectedFood = foods.find((food) => food._id === id);
    if (!selectedFood) return;

    const updatedOrder = [...orderFoods, selectedFood];
    setOrderFoods(updatedOrder);
    typeof localStorage !== "undefined"
      ? localStorage.setItem("OrderFood", JSON.stringify(updatedOrder))
      : "";

    toast.success("🦄 Successfully added to order!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {categories?.map((category, index) => {
        if (category.foodCount > 0) {
          return (
            <div
              key={index}
              className="h-fit p-5 rounded-xl w-full flex flex-col gap-2 text-2xl text-white"
            >
              <div>{category.categoryName}</div>
              <div className="flex gap-5">
                {foods
                  ?.filter((food) => food.category === category._id)
                  .map((food, foodIndex) => (
                    <div
                      key={foodIndex}
                      className="border bg-white border w-[250px] h-[200px] rounded-xl flex flex-col p-3 mt-[24px] gap-3"
                    >
                      <div className="w-full h-3/5 border border-gray-100 rounded-2xl flex flex-col overflow-hidden object-cover relative">
                        <img src={food.image} alt={food.foodName} />
                        <PlusIcon
                          className="absolute bottom-2 right-2 p-1 bg-white text-red-500 rounded-full cursor-pointer"
                          onClick={() => handleAddToOrder(food._id)}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-black">
                        <p className="text-red-600">{food.foodName}</p>
                        <p>${food.price}</p>
                      </div>
                      <div className="text-xs text-black">
                        {food.ingredients}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
