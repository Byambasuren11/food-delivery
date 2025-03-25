import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ShoppingCarts = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-start justify-start">
        <ShoppingCart className="p-3 bg-white rounded-full text-red-500 w-9 h-9 " />
      </SheetTrigger>
      <SheetContent className="bg-[#404040] flex flex-col gap-5">
        <SheetHeader bg-black>
          <SheetTitle className="flex gap-2">
            <ShoppingCart />
            <div className="text-white">Order detail</div>
          </SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="w-full">
            <TabsTrigger value="cart" className="w-1/2">
              Cart
            </TabsTrigger>
            <TabsTrigger value="order" className="w-1/2">
              Order
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cart" className="bg-white h-[670px]">
            {/* <div className="bg-white h-[670px]">cart</div> */}
          </TabsContent>
          <TabsContent value="order" className="bg-white h-[670px]">
            {" "}
            {/* <div className="bg-white h-[670px]">order</div> */}
          </TabsContent>
        </Tabs>

        {/* <SheetDescription className="bg-white h-[670px]"></SheetDescription> */}
        {/* <SheetDescription className="bg-white h-64"></SheetDescription> */}
      </SheetContent>
    </Sheet>
  );
};
