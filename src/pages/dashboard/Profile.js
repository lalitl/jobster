import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formrow } from "../../Components";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;
    if (!name || !email || !location || !lastName) {
      toast.error("please fill the required fields");
    }
    dispatch(updateUser(userData));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <Formrow
            type="text"
            name="name"
            handleChange={handleChange}
            value={userData.name}
          />
          <Formrow
            type="text"
            name="lastName"
            labelText="last name"
            handleChange={handleChange}
            value={userData.lastName}
          />
          <Formrow
            type="text"
            name="email"
            handleChange={handleChange}
            value={userData.email}
          />
          <Formrow
            type="text"
            name="location"
            handleChange={handleChange}
            value={userData.location}
          />
          
          <button className="btn btn-block" disabled={isLoading}>
            {isLoading ? "please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
