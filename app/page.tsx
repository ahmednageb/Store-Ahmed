import Image from "next/image";
import screen from "../image/screnpag.jpg"; // Adjust the path as necessary
import Link from "@mui/material/Link"; // Adjust the path as necessary
import ProductCart from "@/component/ProductCart";
import Categories from "./Products/Category/page";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-full mb-10">
      <div>
        <Image src={screen} alt="logo" className="object-fill  h-100" />
      </div>
      <div className=" mt-5 flex justify-center items-center flex-col">
        <div className="flex flex-wrap justify-center max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-800 ">Our Categories</h1>
        {/* <Categories/> */}
        </div>
        <div className="justify-items-center  mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Highest Rated Products
          </h1>
          <p>
            Check out below a curated list of the products that received the
            highest ratings from our customers
          </p>
        </div>
        <div className="mt-5">
         <ProductCart products={[]}/>
        </div>
        <div className="mt-5">
         <Button variant="contained" color="warning" size="large">
          <Link  href="/Products" color="white" underline="hover"  > All Products</Link>
        </Button>
        </div>
      </div>
    </div>
  );
}
