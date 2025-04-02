"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { log } from "console";

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

export const Foods = (props: FoodsProps) => {
  const { categories } = props;
  const [foods, setFoods] = useState<Food[]>([]);
  const orderFoods: Food[] = [];
  const getFoods = async () => {
    const response = await axios.get("http://localhost:4007/food");
    setFoods(response.data.data);
  };
  useEffect(() => {
    getFoods();
  }, []);
  const onClick = (id: string) => {
    const Id = foods?.map((element: Food, index) => {
      if (element._id === id) {
        orderFoods.push(element);
        localStorage.setItem("OrderFood", JSON.stringify(orderFoods));
      }
    });
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        {categories?.map((element, index) => {
          if (element.foodCount) {
            return (
              <div key={index}>
                <div className="h-fit p-5 rounded-xl w-full flex flex-col gap-2 text-2xl text-white">
                  <div>{element.categoryName}</div>
                  <div className="flex gap-5">
                    {foods?.map((el, index) => {
                      if (el.category === element._id) {
                        return (
                          <div
                            key={index}
                            className="border bg-white border w-[250px] h-[200px] rounded-xl flex flex-col p-3 mt-[24px] gap-3"
                          >
                            <div className="w-full h-3/5 border border-gray-100 rounded-2xl flex flex-col overflow-hidden object-cover relative">
                              <img src={el.image} />
                              <PlusIcon
                                className="absolute bottom-2 right-2 p-1 bg-white text-red-500 rounded-full"
                                onClick={() => onClick(el._id)}
                              />
                            </div>
                            <div className="flex justify-between text-sm text-black">
                              <p className="text-red-600"> {el.foodName}</p>
                              <p>{el.price}$</p>
                            </div>
                            <div className="text-xs text-black">
                              {el.ingredients}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
