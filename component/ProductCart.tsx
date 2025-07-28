import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IProduct } from "../interface"; // Adjust the import path as necessary
import Link from "@mui/material/Link";

export default async function productCard() {
  let response = await fetch(
    "https:dummyjson.com/products?limit=10&sortBy=rating&order=desc"
  );
  let data = await response.json();
  return (
    <div className="flex flex-wrap justify-center gap-3 ">
      {data.products.map((product: IProduct) => (
        <Link
          href={`/Product/${product.id}`}
          key={product.id}
          style={{ textDecoration: "none" }}
           className="transition-transform hover:scale-105"
        >
          <Card
            sx={{ maxWidth: 345, height: "100%" }}
            style={{ background: "#F3F3F3" }}
          >
            <CardMedia
              component="img"
              height="100"
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
              <br />
              <Typography>$ {product.price}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
