import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  // const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8888/dorin/ecminato.com-back/api/web/index.php/en/v1/auth/login",
        {
          email: "anil@yopmail.com",
          password: "Demo123@",
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div>
      <ul>
        {/* {data.map((row) => (
          <li>{row.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Home;
