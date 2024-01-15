import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const register = () => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    userName: "",
    password: "",
    photo: "",
  });
  const filchange = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState();

  const uploadCloudniary = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ddremcnd");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhqaaolnf/image/upload",
      { method: "POST", body: formData }
    );
    const data = await res.json();
    const secure_url = data.secure_url;
    return secure_url;
  };
  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submiteHandler = async (e) => {
    e.preventDefault();
    const imgurl = await uploadCloudniary();
    try {
      const res = await axios.post("/api/user/registration",{...input, photo:imgurl})
  if (res.data.success) {
    toast.success("User register Successfully")
  }
  setInput({
    name: "",
    phone: "",
    email: "",
    userName: "",
    password: "",
    photo: "",
  })
  setFile("")
    } catch (error) {
      toast.error(error?.response?.data?.message)
setInput({
  name: "",
  phone: "",
  email: "",
  userName: "",
  password: "",
  photo: "",
})
setFile("")
    }
  };
  return (
    <div>
       <ToastContainer />
      <div className=" max-w-7xl mx-auto">
        <form
          onSubmit={submiteHandler}
          action=""
          className="p-2 mt-3 grid grid-cols-2 gap-3 shadow-xl"
        >
          <div>
            <input
              type="text"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="Name"
              onChange={inputhandler}
              name="name"
              value={input.name}
            />
          </div>
          <div>
            <input
              type="number"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="Phone"
              onChange={inputhandler}
              name="phone"
              value={input.phone}
            />
          </div>
          <div>
            <input
              type="email"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="Email"
              onChange={inputhandler}
              name="email"
              value={input.email}
            />
          </div>
          <div>
            <input
              type="text"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="userName"
              onChange={inputhandler}
              name="userName"
              value={input.userName}
            />
          </div>
          <div>
            <input
              type="password"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="Password"
              onChange={inputhandler}
              name="password"
              value={input.password}
            />
          </div>
          <div>
            <input
              type="file"
              className=" border border-gray-700 rounded-md  px-5 py-2 w-full"
              placeholder="Name"
              name="photo"
              onChange={filchange}
              // value={input.photo}
            />
          </div>
          <div>
            <button type="submit" className=" border border-black px-3 py-3">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
