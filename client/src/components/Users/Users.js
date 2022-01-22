import React, { useState, useEffect } from "react";
import usersAPI from "../../api/Api";

export default function Users() {
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await usersAPI.get("/users");
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(errors);
      setUserData([]);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);
}
