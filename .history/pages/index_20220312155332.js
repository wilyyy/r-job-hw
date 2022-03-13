import { useEffect, useState } from "react";
import styled from "styled-components";

import StudentCard from "@/components/StudentCard";
import axios from "axios";


const Page = styled.div`

`;

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const ShowData = async() => {
      try{
        const result = await axios.get("https://api.hatchways.io/assessment/students");
        setData(result);
      } catch (e) {
        setData("There was a problem fetching this data")
      }
    }
  }, []);

  return (
    <Page>
      {data}
    </Page>
  )
}
