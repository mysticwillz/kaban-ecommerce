import { toast } from "react-toastify";
import { cartActions } from "./CartSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = () => {
      const res = localStorage.getItem("Data");
      const data = res.json();

      return data;
    };
    try {
      const cartData = fetchHandler();

      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      toast.error("could not fetch cart items ");
    }
  };
};
