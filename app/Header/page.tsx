import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../image/logo.png"; // Adjust the path as necessary
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <div className=" shadow-md" style={{backgroundColor: "#E2E2E2"}}>
      <div className="flex justify-between items-center mx-4 py-4">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className="flex space-x-4 gap-3 text-black">
          <Link href="/" underline="hover" color="black" >Home</Link>
          <Link href="/Products" underline="hover" color="black">Products</Link>
          <Link href="/ShoppingBag" underline="hover" color="black">Shopping Bag</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
