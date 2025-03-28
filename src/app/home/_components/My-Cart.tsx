import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const MyCart = () => {
  const [foods, setFoods] = useState([]);
  const [OrderFoods, setOrderFoods] = useState();

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("OrderFood")) || [];
    setFoods(storedFoods);
  }, []);

  const deleteFood = (index) => {
    const updatedFoods = foods.filter((_, i) => i !== index);
    setFoods(updatedFoods);
    localStorage.setItem("OrderFood", JSON.stringify(updatedFoods));
  };

  const DecreaseFood = () => {};
  const IncreaseFood = () => {};

  return (
    <div className="flex flex-col gap-3">
      <div>My Cart</div>
      {foods.length === 0 ? (
        <div>Карт хоосон байна.</div>
      ) : (
        <div className="flex flex-col gap-5">
          {foods.map((element, index) => (
            <div
              key={index}
              className="h-[90%] w-full flex p-3 border-b-2 border-dashed gap-3"
            >
              <div className="w-[30%] h-20 rounded-2xl overflow-hidden object-cover">
                <img
                  src={element.image}
                  alt={element.foodName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[70%]">
                <div className="flex w-[90%] justify-between gap-3">
                  <div>
                    <div className="text-red-500">{element.foodName}</div>
                    <div className="text-xs">{element.ingredients}</div>
                  </div>
                  <div>
                    <X
                      className="text-red-500 border border-red-500 rounded-full p-2 w-8 h-8 cursor-pointer"
                      onClick={() => deleteFood(index)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <button
                      className="border px-2"
                      onClick={() => {
                        DecreaseFood();
                      }}
                    >
                      −
                    </button>
                    <div>{element.quantity || 1}</div>
                    <button
                      className="border px-2"
                      onClick={() => {
                        IncreaseFood();
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    {element.price} <p>$</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
