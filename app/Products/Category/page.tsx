
import Link from "@mui/material/Link";

interface Category {
  name: string;
  slug: string;
}
export default async function Categories() {
  let data = await fetch("https:dummyjson.com/products/categories");
  let categories: Category[] = await data.json();

  return (

      <div className="flex flex-wrap justify-between gap-1 my-2">
        {categories.map((category)=> (
          <Link
            className=" border-2  rounded-full border-black p-1 "
            underline="none"
            color="textPrimary"
            bgcolor="Menu"
            href={`/Products/Category/${category.slug}`}
            key={category.slug}
          >
            {category.slug}
          </Link>
        ))}
      </div>
  );
}
