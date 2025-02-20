import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const CreateAccount = () => {
  return (
    <>
      <div className="flex w-full justify-between h-screen">
        <div className="w-2/5 h-full justify-center items-center text-gray-500 text-sm">
          <div className="w-3/4 h-1/2 flex flex-col gap-6">
            <div>
              <h3 className="text-black text-lg">Create your account</h3>
              <p>Sign up to explore your favorite dishes</p>
            </div>
            <Input placeholder="Enter your email address" />
            {/* <button type="submit" className="bg-gray-400 w-full text-white">
              Let's go
            </button> */}
            <Button className="bg-gray-400">Let's go</Button>
            <p className="text-center mt-2">
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
        </div>
        <div className="w-3/5 h-full">
          <img src="./bicycle.png" />
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
