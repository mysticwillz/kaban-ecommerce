import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";
export const handlePayment = (email, amount) => {
  const handler = PaystackPop.setup({
    key: "pk_test_136c8edf8881df8fd56e266070b1a013f49336e1", // Replace with your public key
    email,
    amount: amount * 100,

    onClose: () => {
      toast.error("Window closed.");
    },
    callback: (response) => {
      const message = "Payment complete! Reference: " + response.reference;
      toast.success(message);
    },
  });
  handler.openIframe();
};
