import React, { useContext } from "react";
import CategoryListing from "../Components/CategoryListing/CategoryListing";
import { FetchContext } from "../Context/FetchContext";

function Category() {
  const listings = useContext(FetchContext);
  return <CategoryListing listings={listings} />;
}

export default Category;
