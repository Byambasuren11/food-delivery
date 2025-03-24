"use client";
import Logo from "../_components/Logo";
import { Button } from "../../../components/ui/button";
import { MapPin, ShoppingCart, User } from "lucide-react";
import { AddressInput } from "../_components/Address-Input";
import axios from "axios";
import { useEffect, useState } from "react";

export const Header = () => {
  const address1 = localStorage.getItem("address");
  const [location, setLoction] = useState({});
  console.log("loc", location);

  const updateAddress = async () => {
    setLoction({ ...location, _id: localStorage.getItem("_id") });
    const response = await axios.put("http://localhost:4007/user", location);
    console.log(response);
  };
  const onClick = () => {
    updateAddress();
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
            />
          </div>
          <MapPin className="absolute top-1 left-1 text-red-500" />
        </div>
        <Button className="bg-white rounded-full flex justify-center items-center">
          <ShoppingCart className=" text-red-500" />
        </Button>
        <Button className="bg-white rounded-full flex justify-center items-center">
          <User className=" text-red-500" />
        </Button>
      </div>
    </div>
  );
};
