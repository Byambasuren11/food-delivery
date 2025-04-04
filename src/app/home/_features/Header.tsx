"use client";
import Logo from "../_components/Logo";
import { MapPin, User } from "lucide-react";
import { AddressInput } from "../_components/Address-Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShoppingCarts } from "./Shopping-Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type Location = {
  address: string;
  _id: string |null ;
};
export const Header = () => {
  const address1 = localStorage.getItem("address") || "";
  const [location, setLoction] = useState<Location>({ address: "", _id: "" });
  const router = useRouter();

  const updateAddress = async () => {
    setLoction({ ...location, _id: localStorage.getItem("_id") });
    const response = await axios.put("http://localhost:4007/user", location);
    console.log(response.data);
    localStorage.setItem("address", response.data.updatedUser.address);
  };
  const onClick = () => {
    updateAddress();
  };
  const onClick1 = () => {
    localStorage.clear();
    router.push("/Login");
  };
  useEffect(() => {}, []);
  return (
    <div className="flex justify-between w-full p-4 ">
      <Logo />
      <div className="flex gap-3">
        <div className="relative">
          <div className="rounded-2xl bg-white pl-9 w-fit h-9 text-red-500 p-1">
            <AddressInput
              address1={address1}
              setLocation={setLoction}
              onClick={onClick}
              location={location}
            />
          </div>
          <MapPin className="absolute top-1 left-1 text-red-500" />
        </div>
        <ShoppingCarts />
        <Popover>
          <PopoverTrigger>
            <User className="p-3 bg-white rounded-full text-red-500 w-9 h-9" />
          </PopoverTrigger>
          <PopoverContent>
            {" "}
            <Button
              className="bg-gray-200 text-black rounded-2xl"
              onClick={onClick1}
            >
              Sign Out
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
