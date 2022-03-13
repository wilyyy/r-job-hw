import { useEffect, useState } from "react";
import styled from "styled-components";

import StudentCard from "@/components/StudentCard";
import axios from "axios";


const Page = styled.div`

`;

export default function Home() {
  useEffect(() => {
    const ShowData = async() => {
      try{
        const result = await axios.get("https://api.hatchways.io/assessment/students");
      } catch (e) {

      }
    }
  }, []);

  return (
    <Page></Page>
  )
}
