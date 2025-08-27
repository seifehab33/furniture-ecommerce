import pro1 from "@/assets/product-10-300x300.webp";
import pro2 from "@/assets/product-25-300x300.webp";
import pro3 from "@/assets/product-3-300x300.webp";
import pro4 from "@/assets/product-35-300x300.webp";
import pro5 from "@/assets/product-37-300x300.webp";
import pro6 from "@/assets/product-41-300x300.webp";
import pro7 from "@/assets/product-43-300x300.webp";
import pro8 from "@/assets/product-7-300x300.webp";
import ProductSelling from "@/components/products/ProductSelling";

const products = [
  {
    id: 1,
    img: pro1,
    title: "Aliquam Blandit Augue Lacus",
    desc: "tables",
    price: 120,
  },
  { id: 2, img: pro2, title: "Augue Mauris Bibendum", desc: "beds", price: 95 },
  { id: 3, img: pro3, title: "Commodo Amcorper", desc: "chairs", price: 150 },
  { id: 4, img: pro4, title: "Diam Arcu", desc: "chairs", price: 80 },
  { id: 5, img: pro5, title: "Diam Volutpat", desc: "beds", price: 110 },
  { id: 6, img: pro6, title: "Dolore Magna", desc: "sofas", price: 135 },
  { id: 7, img: pro7, title: "Luctus Ultrices", desc: "decor", price: 105 },
  { id: 8, img: pro8, title: "Orci Porta", desc: "beds", price: 99 },
];

function BestSell() {
  return (
    <ProductSelling
      products={products}
      heading="Bestsellers of the week"
      description="Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget nullam non nisi elementum sagittis vitae et leo duis ut diam quam."
    />
  );
}

export default BestSell;
