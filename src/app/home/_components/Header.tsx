import Logo from "./Logo";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const Header = () => {
  return (
    <div className="flex justify-between w-full p-4 ">
      <Logo />
      <div className="flex">
        <Input />
        <Button className="bg-gray-400" />
        <Button className="bg-gray-400" />
      </div>
    </div>
  );
};
