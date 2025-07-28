import Categories from "./Category/page";
import AllProductsCard from "@/component/AllProductsCart";

export default function Products() {
  return (
    <div className="mb-10 h-full">
      <div
        style={{ backgroundColor: "#F4F5F8", height: 240, width: "full" }}
        className="text-center flex justify-center items-center font-bold"
      >
        <h1
          style={{ color: "#2F333A", font: "Raleway", fontSize: 36 }}
          className=""
        >
          Products
        </h1>
      </div>
      <div className=" mt-5 flex justify-center items-center flex-col">
        <div className="flex flex-wrap justify-center max-w-4xl mb-10">
          <Categories />
        </div>
        <div>
          <AllProductsCard />
        </div>
      </div>
    </div>
  );
}
