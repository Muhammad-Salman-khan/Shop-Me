const GridLayer = ({ children }) => {
  return (
    <>
      <div className=" mx-auto mt-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {children}
      </div>
    </>
  );
};

export default GridLayer;
