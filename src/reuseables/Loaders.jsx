export const OverlayLoader = () => {
  return (
    <main className="absolute left-0 top-0 w-full h-screen z-index-15 flex justify-center items-center bg-white">
      <div className=" w-[55px] h-[55px] border-[6px] rounded-[50%] border-x-transparent border-y-[#1e6091] animate-spin "></div>
    </main>
  );
};
