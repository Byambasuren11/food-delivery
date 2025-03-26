import { Button } from "@/components/ui/button";

export const MyCart = () => {
  const Foods = JSON.parse(localStorage.getItem("OrderFood"));
  console.log("OrderFoods", Foods);
  const addToCart = () => {
    console.log("Add Value");
    setQuantity((quantity += 1));
    console.log(quantity);
  };
  return (
    <div className="flex flex-col gap-3">
      <div>My Cart</div>
      <div className="flex flex-col gap-5">
        {Foods.map((element, index) => {
          return (
            <div className="h-fit  w-full flex p-3 border-b-2 border-dashed ">
              <div className="w-1/4 h-20 rounded-2xl overflow-hidden object-cover">
                <img src={element.image} className="" />
              </div>
              <div>
                <div className="flex w-fit">
                  <div>
                    <div className="text-red-500">{element.foodName}</div>
                    <div className="text-xs">{element.ingredients}</div>
                  </div>
                  <div>X</div>
                </div>
                <div className="flex gap-3">
                  <button>-</button>
                  <div>{element.foodCount}</div>
                  <button>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
