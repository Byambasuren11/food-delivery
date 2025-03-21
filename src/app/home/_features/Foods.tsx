"use client";
import axios from "axios";
import { FoodModel } from "../_components/Food-Model";
import { useEffect, useState } from "react";

type Category = {
  categoryName: string;
  _id: string;
};

type FoodsProps = {
  categories: Category[];
};

export const Foods = (props: FoodsProps) => {
  const { categories } = props;
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    const response = await axios.get("http://localhost:4007/food");
    setFoods(response.data.data);
  };
  console.log("foods", foods);
  useEffect(() => {
    getFoods();
  }, []);
  console.log("g", categories);
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
                            <div className="w-full h-3/5 border border-gray-100 rounded-2xl flex flex-col overflow-hidden object-cover">
                              <img src={el.image} />
                            </div>
                            <div className="flex justify-between text-sm">
                              <p className="text-red-600"> {el.foodName}</p>
                              <p>{el.price}$</p>
                            </div>
                            <div className="text-xs">{el.ingredients}</div>
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
