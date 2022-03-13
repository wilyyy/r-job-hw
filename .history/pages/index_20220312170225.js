import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import StudentCard from "@/components/StudentCard";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardCont = styled.div`
  width: 60%;
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ShowData = async() => {
      try{
        const result = await axios.get("https://api.hatchways.io/assessment/students");
        setData(result.data.students);
      } catch (e) {
        setData("There was a problem fetching this data")
      }
    }

    ShowData();
  }, []);

  return (
    <Page>
      <StudentCard />
      <CardCont>
        {data.map((el, index) => 
          <StudentCard 
            key={index}
            pic={el.pic}
          />
        )}
      </CardCont>
      
    </Page>
  )
}
