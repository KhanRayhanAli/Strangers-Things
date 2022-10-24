import React from "react";

const Profile = () => {
  fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          content:"",
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);

  return (
    <div>
      <h1>Your profile here</h1>
      <div>
        {console.log()}
      </div>
    </div>
  );
};

export default Profile;
