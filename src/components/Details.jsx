/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const [product, setProducts] = useState("");
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios(`/products/${id}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <Link
        to={"/"}
        className="px-5 py-2 rounded-md bg-blue-600 absolute top-5 left-5 active:scale-95 font-semibold cursor-pointer"
      >
        Go Back
      </Link>
      {product ? (
        <div className="w-full h-screen px-16 py-10 flex justify-center items-center gap-10 overflow-x-hidden overflow-y-auto mx-auto">
          <div className="bg-white flex justify-between text-black rounded-lg h-96 w-[40em] p-4">
            <div className="w-[50%]">
              <img
                src={product.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="w-[45%] flex flex-col gap-3 mt-2">
              <h1 className="text-3xl text-zinc-900 font-medium">
                {product.title}
              </h1>
              <div className="text-sm opacity-70">{product.category}</div>
              <div className="text-base text-zinc-600 line-clamp-4">
                {product.description}
              </div>
              <div className="font-semibold flex items-center justify-between text-xl">
                <div>
                  ${product.price - 3}
                  <span className="text-xs ml-2 line-through opacity-55">
                    {product.price}
                  </span>
                </div>
                <div className="text-lg px-4 py-3 text-white rounded-full bg-yellow-500 w-fit">
                  {product.rating.rate}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="px-5 py-2 bg-green-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-green-500">
                  Edit
                </div>
                <div className="px-5 py-2 bg-red-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-red-500">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
