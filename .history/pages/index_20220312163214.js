import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import StudentCard from "@/components/StudentCard";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ShowData = async() => {
      try{
        const result = await axios.get("https://api.hatchways.io/assessment/students");
        setData(result.data.students.s);
      } catch (e) {
        setData("There was a problem fetching this data")
      }
    }

    ShowData();
  }, []);

  return (
    <Page>
      {data.map((el, index) => 
        <div key={index}>
          {el.city}
        </div>
      )}
    </Page>
  )
}
