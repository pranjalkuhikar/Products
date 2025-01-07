import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ProductData } from "../context/Product";
import Loading from "./Loading";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [filter, setFilter] = useState("");
  const { product } = useContext(ProductData);
  const category = new URLSearchParams(useLocation().search).get("categories");
  useEffect(() => {
    setFilter(category || "");
  }, [category]);

  const filteredProduct = product?.filter((item) =>
    item.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Navbar />
      {filteredProduct ? (
        <div className="w-full px-16 py-10 flex justify-center flex-wrap gap-10 overflow-x-hidden overflow-y-auto mx-auto">
          {filteredProduct.map((item, idx) => (
            <Link
              to={`/details/${item.id}`}
              key={idx}
              className="bg-white text-black rounded-lg h-96 w-72 p-4"
            >
              <div className="h-[65%]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-contain hover:scale-105"
                />
              </div>
              <div className="h-[35%] flex flex-col gap-3 mt-2">
                <h1 className="text-base text-zinc-900 font-medium line-clamp-1">
                  {item.title}
                </h1>
                <h2 className="text-xs text-zinc-600 line-clamp-2">
                  {item.description}
                </h2>
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    ${item.price - 3}
                    <span className="text-xs ml-2 line-through opacity-55">
                      {item.price}
                    </span>
                  </h2>
                  <div className="px-5 py-2 bg-yellow-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-yellow-500">
                    Add To Cart
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
