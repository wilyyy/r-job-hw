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

const Card = styled.div`
  width: 65vw;
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px #525252;
  padding: 0 10px;
`;

const ScrollCont = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    background: none;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7f7d80;
    border-radius: 30px; 
  }
`;

const TextInput = styled.input`
  outline: none;
  border: none;
`;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ShowData = async() => {
      try{
        const result = await axios.get("https://api.hatchways.io/assessment/students");
        setData(result.data.students);
      } catch (e) {
        setData("There was a problem fetching this data");
      }
    }

    ShowData();
  }, []);

  return (
    <Page>
      <Card>
        <TextInput placeholder="Search for name" />
        <ScrollCont>
          {data.map((el, index) => 
            <StudentCard 
              key={index}
              city={el.city}
              company={el.company}
              email={el.email}
              firstName={el.firstName}
              lastName={el.lastName}
              grades={el.grades}
              skill={el.skill}
              pic={el.pic}
            />
          )}
        </ScrollCont>
      </Card>
      
    </Page>
  )
}