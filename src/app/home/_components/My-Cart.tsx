import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Food } from "../_features/Foods";

type s = {
  _id: string;
};
export const MyCart = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedFoods = localStorage.getItem("OrderFood");
    if (storedFoods) {
      const storedfoods = JSON.parse(storedFoods);
      setFoods(storedfoods);
      updateTotalPrice(storedfoods);
      orderFood();
    }
  }, []);
  const orderFood = async () => {
    const storedFoods = localStorage.getItem("OrderFood");
    if (storedFoods) {
      const storedfoods = JSON.parse(storedFoods);
      const foodOrderItems = storedfoods.map((element: s) => {
        return element._id;
      });
      console.log(foodOrderItems);
    }
    // const response = await axios.post("http://localhost:4007/food-order");
  };

  const updateTotalPrice = (foodsList: Food[]) => {
    const total = foodsList.reduce(
      (acc: number, food: Food) => acc + (food.price || 0),
      0
    );
    setTotalPrice(total);
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  };

  const deleteFood = (index: number) => {
    const updatedFoods = foods.filter((_, i) => i !== index);
    setFoods(updatedFoods);
    localStorage.setItem("OrderFood", JSON.stringify(updatedFoods));
    updateTotalPrice(updatedFoods);
  };
  const handleChangeQuantity = (index: number, id: string) => {
    setFoods((prevFoods) => {
      const updatedFoods: Food[] = prevFoods.map((food: Food) =>
        food._id === id
          ? {
              ...food,
              quantity: Math.max(1, (food.quantity || 1) + index),
              price: food.price,
            }
          : food
      );

      localStorage.setItem("OrderFood", JSON.stringify(updatedFoods));
      updateTotalPrice(updatedFoods);
      return updatedFoods;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div>My Cart</div>
      {foods.length === 0 ? (
        <div className="p-8 flex flex-col justify-center items-center">
          <img src="Logo2.png" />
          <div className="text-xl font-extrabold">Your cart is empty</div>
          <div className="text-xs text-gray-400 text-center">
            Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
            cravings!
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {foods.map((element: Food, index) => (
            <div
              key={element._id}
              className="h-[90%] w-full flex p-3 border-b-2 border-dashed gap-3"
            >
              <div className="w-[30%] h-20 rounded-2xl overflow-hidden">
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
                      onClick={() => handleChangeQuantity(-1, element._id)}
                      disabled={element.quantity === 1}
                    >
                      −
                    </button>
                    <div>{element.quantity || 1}</div>
                    <button
                      className="border px-2"
                      onClick={() => handleChangeQuantity(1, element._id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    {element.price * element.quantity || element.price} <p>$</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-xl font-bold text-right">
            Total Price: {totalPrice}$
          </div>
        </div>
      )}
    </div>
  );
};
