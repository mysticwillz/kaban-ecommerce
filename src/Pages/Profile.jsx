import React from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../Components/Firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const auth = getAuth();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const navigate = useNavigate();
  function handleLogOut() {
    auth.signOut();
    navigate("/");
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          email: email,
        });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
          email: email,
        });
      }
      toast.success("profile details updated");
    } catch (error) {
      toast.error("profile update failed");
    }
  };
  return (
    <section>
      <h1 className="text-center font-bold  text-[2rem] mt-[15px]">
        My Profile
      </h1>
      <form className="mx-auto flex flex-col items-center max-w-2xl  px-4">
        <input
          type="text"
          disabled={!changeDetail}
          id="name"
          onChange={(e) => {
            handleChange(e);
          }}
          value={name}
          className="w-full bg-blue-200  rounded my-4 p-4"
        />
        <input
          type="email"
          disabled={!changeDetail}
          id="email"
          onChange={(e) => {
            handleChange(e);
          }}
          value={email}
          className="w-full bg-blue-200  rounded p-4 "
        />
      </form>
      <div className="flex justify-between mt-[10px]  items-center max-w-2xl px-4 mx-auto w-full">
        <p className="text-sm">
          Do you want to edit your details?
          <span
            onClick={() => {
              changeDetail && handleSubmit();
              setChangeDetail((prev) => !prev);
            }}
            className="text-red-400 cursor-pointer pl-[4px] text-[16px] whitespace-nowrap capitalize"
          >
            {changeDetail ? "Apply Change" : "Edit"}
          </span>
        </p>
        <p
          onClick={handleLogOut}
          className="text-[#1e6091] whitespace-nowrap cursor-pointer"
        >
          Sign out
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-[25px]">
        <button className="h-[50px] w-full mx-auto rounded  cursor-pointer  text-white text-center uppercase flex justify-center items-center bg-[#1e6091]">
          list a product
        </button>
      </div>
    </section>
  );
}
