const Navbar = () => {
  return (
    <>
      <div className="h-full w-[20%] bg-zinc-700  py-10 flex flex-col gap-6">
        <div className="px-5 py-2 mx-14 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 active:scale-95 cursor-pointer text-center">
          Add Product
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-14">
          <h1 className="text-2xl underline">Category</h1>
          <h2 className="flex px-5 py-2 rounded-lg active:bg-zinc-800 hover:bg-zinc-800 items-center active:scale-95 gap-2 cursor-pointer">
            <span className="h-3 w-3 rounded-full bg-red-400 inline-block"></span>
            Mens
          </h2>
          <h2 className="flex px-5 py-2 rounded-lg active:bg-zinc-800 hover:bg-zinc-800 items-center active:scale-95 gap-2 cursor-pointer">
            <span className="h-3 w-3 rounded-full bg-blue-400 inline-block"></span>
            Women
          </h2>
          <h2 className="flex px-5 py-2 rounded-lg active:bg-zinc-800 hover:bg-zinc-800 items-center active:scale-95 gap-2 cursor-pointer">
            <span className="h-3 w-3 rounded-full bg-green-400 inline-block"></span>
            TV
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
