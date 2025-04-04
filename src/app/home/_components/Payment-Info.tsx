import { useEffect, useState } from "react";

export const PaymentInfo = () => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTotal = localStorage.getItem("totalPrice");
      if (storedTotal) {
        setTotal(parseFloat(storedTotal));
      }
    }
  }, []);

  const shipping = 0.99;

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="">Payment Info</div>

      <div className="border-b border-6 border-gray-400 border-dashed gap-3 pb-3">
        <div className="text-gray-500 text-sm flex justify-between ">
          <div>Items</div>
          <div>{total ? `${total.toFixed(2)}$` : "-"}</div>
        </div>

        <div className="text-gray-500 text-sm flex justify-between">
          <div>Shipping</div>
          <div>{total ? `${shipping.toFixed(2)}$` : "-"}</div>
        </div>
      </div>

      <div className="font-semibold text-sm flex justify-between">
        <div>Total</div>
        <div>{total ? `${(total + shipping).toFixed(2)}$` : "-"}</div>
      </div>
    </div>
  );
};
