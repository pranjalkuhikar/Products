import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const { data } = await axios("/products/categories");
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="h-full w-[20%] bg-zinc-700  py-10 flex flex-col gap-6">
        <div className="px-5 py-2 mx-14 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 active:scale-95 cursor-pointer text-center">
          Add Product
        </div>
        <hr />
        {categories ? (
          <div className="flex flex-col gap-2 px-10">
            <h2 className="text-xl font-semibold mb-2">Categories:</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <Link
                  to={`/?categories=${category}`}
                  key={index}
                  className="flex px-5 py-2 rounded-lg active:bg-zinc-800 hover:bg-zinc-800 items-center active:scale-95 gap-2 cursor-pointer capitalize"
                >
                  {category}
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Navbar;
