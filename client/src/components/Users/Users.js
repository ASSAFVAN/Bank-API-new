import React, { Fragment, useState, useEffect } from "react";
import usersAPI from "../../API/Api";

export default function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await usersAPI.get("/users");
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
        setUserData([]);
      }
    };

    getUsers();
    return () => {};
  }, []);

  // const showUsers = () => {
  //   userData.map(({ _id, id, cash, credit }) => {
  //     return (
  //       <Fragment key={_id}>
  //         <tr>
  //           <td>{id}</td>
  //           <td>{cash}</td>
  //           <td>{credit}</td>
  //         </tr>
  //       </Fragment>
  //     );
  //   });
  // };

  return <div>users</div>;
  // return <div>{showUsers}</div>;
}
