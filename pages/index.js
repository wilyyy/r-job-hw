import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import StudentInfo from "@/components/StudentInfo";
import { useTags } from "@/utils/AppProvider";

//

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
  padding: 10px 10px 0 10px;
`;

const ScrollCont = styled.div`
  width: 100%;
  height: 100%;
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
  width: 100%;
  font-size: 24px;
  height: 80px;
  outline: none;
  border: none;
  font-family: 'Raleway', sans-serif;
  border-bottom: 1px solid gray;
  padding: 10px 5px;
`;

export default function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [tagSearch, setTagSearch] = useState();
  const {tags, setTags} = useTags();

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
    console.log(tags);
  }, []);

  return (
    <Page>
      <Card>
        <TextInput
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Search by tag"
          value={tagSearch}
          onChange={e => setTagSearch(e.target.value)}
        />
        <ScrollCont>
          {data
            .filter(el => {
              if(!name) return true;
              if(
                el.firstName.toLowerCase().includes(name.toLowerCase()) || 
                el.lastName.toLowerCase().includes(name.toLowerCase())
                // tags[el.id]?tags[el.id].includes(tagSearch.toLowerCase()) : false
              ){
                return true;
              }
            })
            .map((el, index) => 
              <StudentInfo 
                key={index}
                data={el}
              />
          )}
        </ScrollCont>
      </Card>
      
    </Page>
  )
}