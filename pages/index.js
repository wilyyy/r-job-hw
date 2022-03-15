import styled from "styled-components";
import StudentCard from "@/components/StudentCard";

//CSS is put into styled components elements
const Page = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default function Home() {
   return (
      <Page>
         <StudentCard />
      </Page>
   );
}
