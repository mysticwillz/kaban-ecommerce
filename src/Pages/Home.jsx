import { useContext } from "react";

import Products from "../Components/Home/Products.jsx";

import { FetchContext } from "../Context/FetchContext";
import Hero from "../Components/Home/Hero.jsx";
import { OverlayLoader } from "../reuseables/Loaders.jsx";

export default function Home({ loading }) {
  const listings = useContext(FetchContext);

  return loading ? (
    <OverlayLoader />
  ) : (
    <main className="overflow-x-hidden">
      <Hero />
      <Products listings={listings} />
    </main>
  );
}
