import React from "react";
import { useState } from "react";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Components/Firebase";
import { useNavigate } from "react-router-dom";
function CreateListing() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState({
    name: "",

    img: {},
    price: "",
    para: "",
    category: "",
  });
  const { name, img, price, para, category } = listData;

  const handleChange = (e) => {
    if (e.target.files) {
      setListData((prev) => ({
        ...prev,
        img: e.target.files,
      }));
    }
    if (!e.target.files) {
      setListData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (category === "") {
      setLoading(false);
      toast.error("please select category");
      return;
    }

    if (img.length !== 4) {
      setLoading(false);
      toast.error("please upload the correct number or images");
      return;
    }

    const storeImage = (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}-{}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    const imgUrls = await Promise.all(
      [...img].map((image) => storeImage(image))
    ).catch((error) => {
      setLoading(false);
      toast.error("display images not uploaded");

      return;
    });

    const listDataCopy = {
      ...listData,
      imgUrls,
      timestamp: serverTimestamp(),
    };

    delete listDataCopy.img;

    const docRef = await addDoc(collection(db, "listings"), listDataCopy);
    setLoading(false);
    toast.success("Your product have been listed.");

    navigate("/profile");
  };

  if (loading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto mt-[10px]">
      <header className="flex items-center justify-center my-[10px] ">
        <h1 className="text-center text-[2.3rem] font-bold ">Create Listing</h1>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col mt-3  w-full">
        <div className="w-full   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
          <div className="flex flex-col md:flex-row w-full md:w-[49%] items-start  md:items-center">
            <label htmlFor="name" className="font-bold pr-2 ">
              Name:
            </label>
            <input
              type="text"
              required
              id="name"
              onChange={handleChange}
              value={name}
              placeholder="Enter Product Name"
              className="w-full rounded border-0 focus:border-[#1e6091] "
            />
          </div>
          <div className="flex md:items-center flex-col md:flex-row w-full items-start md:w-[49%]  ">
            <label htmlFor="price" className="font-bold pr-2 ">
              Price:
            </label>
            <input
              type="number"
              id="price"
              required
              min="0"
              onChange={handleChange}
              value={price}
              placeholder="1000"
              className="w-full rounded border-0 focus:border-[#1e6091] "
            />
          </div>
        </div>

        <div className="flex flex-col whitespace-normal px-4 items-start mt-[20px]">
          <p className="font-bold pr-2 whitespace-nowrap">Display Images:</p>
          <p className="font-bold text-sm pr-2 whitespace-nowrap">
            The first image will be the cover image (must upload 4 images.
            max(4))
          </p>
          <input
            type="file"
            id="img"
            max="4"
            min="4"
            accept=".jpg, .png, .jpeg"
            multiple
            required
            onChange={handleChange}
            className=" w-full  rounded border-0 focus:border-[#1e6091] px-3 py-1.5 bg-white text-[#424b52] "
          />
        </div>
        <div className="w-full px-4 mt-[20px]">
          <label htmlFor="category" className="font-bold ">
            Category
          </label>
          <select
            id="category"
            name={category}
            onChange={handleChange}
            required
            value={category}
            className=" border-0 rounded  w-full  "
          >
            <option className=" w-[60%] text-[#424b52]  ">
              select a category
            </option>
            <option className=" w-[60%] text-[#424b52]  ">phone</option>
            <option className=" w-[60%] text-[#424b52]  ">laptop</option>
            <option className=" w-[60%] text-[#424b52]  ">camera</option>
            <option className=" w-[60%] text-[#424b52]  ">bags</option>
            <option className=" w-[60%] text-[#424b52]  ">clothing</option>
            <option className=" w-[60%] text-[#424b52]  ">watch</option>
            <option className=" w-[60%] text-[#424b52]  ">shoes</option>
          </select>
        </div>

        <div className=" w-full px-4 mt-[20px]">
          <p htmlFor="para" className="font-bold ">
            Description
          </p>
          <textarea
            onChange={handleChange}
            id="para"
            value={para}
            required
            rows="6"
            placeholder="Enter Product Description here"
            className=" border-0 focus:border-[#1e6091] w-full rounded px-4"
          ></textarea>
        </div>

        <div className="flex items-center justify-center px-4  my-[15px]">
          <button
            type="submit"
            className="w-full rounded border-0 h-[40px] outline-0 hover:bg-[#424b52] transition all duration-150 ease-in-out bg-[#1e6091] text-white uppercase flex items-center justify-center"
          >
            Publish your product
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
