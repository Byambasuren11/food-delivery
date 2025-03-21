import { Header } from "@/app/home/_components/Header";
import { FoodCategories } from "./_features/Food-Categories";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-900">
      <div className="w-4/5 ">
        <Header />
      </div>
      <div className="w-full">
        <img className="object-cover w-full" src="./bgMain.png" />
      </div>
      <div className="bg-gray-700 w-full h-fit flex flex-col items-center">
        <FoodCategories />
      </div>
    </div>
  );
};
export default Home;
