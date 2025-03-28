import { Button } from "@/components/ui/button";

export const PaymentInfo = () => {
  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="">Payment Info</div>
      <div className="border-b border-6 border-gray-400 border-dashed gap-3 pb-3">
        <div className="text-gray-500 text-sm">Items</div>
        <div className="text-gray-500 text-sm">Shipping</div>
      </div>
      <div>Total</div>
    </div>
  );
};
