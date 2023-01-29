import { useContext } from "react";

import Products from "../Components/Home/Products.jsx";

import { FetchContext } from "../Context/FetchContext";
import Hero from "../Components/Home/Hero.jsx";

export default function Home() {
  const listings = useContext(FetchContext);
  return (
    <main>
      <Hero />
      <Products listings={listings} />
    </main>
  );
}
