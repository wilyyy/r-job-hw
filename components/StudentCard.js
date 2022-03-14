import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import { useTags } from "@/utils/AppProvider";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: auto;
    font-family: 'Raleway', sans-serif;
    padding: 20px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: auto;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 500px;
    height: auto;

    ul {
        list-style-type: none;
        position: relative;
        right: 20px;
    }
`;

const ImageCont = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    overflow: hidden;
    border: 1px solid #c2c2c2;
    border-radius: 100%;

    img{
        min-width: 100%;
        min-height: 100%;
        flex-shrink: 0;
    }
`;

const ExpandBtn = styled.button`
    width: 60px;
    height: 60px;
    font-size: 60px;
    color: grey;
    border: none;
    background: none;
    cursor: pointer;

    :hover{
        color: #000;
        transition: 0.5s;
    }
`;

const TextInput = styled.input`
    width: 200px;
    height: 60px;
    outline: none;
    border: none;
    font-family: 'Raleway', sans-serif;
    border-bottom: 1px solid gray;
    padding: 5px;
`;

const TagCont = styled.div`
    display: flex;
    width: auto;
    height: auto;
`;

const Tag = styled.div`
    width: auto;
    padding: 10px;
    height: 45px;
    background-color: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    border-radius: 5px;
`;

export default function StudentCard({
    city,
    company,
    email,
    firstName,
    lastName,
    grades,
    skill,
    pic
}) {
    const [expand, setExpand] = useState(false);
    const {tags, setTags} = useTags();
    const InputRef = useRef();

    // const uid = uuidv4();

    const AddTag = (e, tagText) => {
        if(e.key === 'Enter'){
            InputRef.current.value = "";
            setTags([...tags, tagText]);
        }
    }

    return (
        <Container>
            <Row>
                <ImageCont>
                    <img src={pic} alt="avatar pic"/>
                </ImageCont>
                <Column>
                    <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
                    <ul>
                        <li>Email: {email}</li>
                        <li>Company: {company}</li>
                        <li>Skill: {skill}</li>
                        <li>Average: {grades.reduce((prev, curr) => Number(prev) + Number(curr), 0) / grades.length}%</li>
                        <li>Location: {city}</li>
                    </ul>
                    {expand === true &&
                        <ul>
                            {grades.map((el, index) => 
                                <li key={index}>Test {index + 1}: {el}</li>
                            )} 
                        </ul>      
                    }
                    <TagCont>
                        {tags.map((el, index) => 
                            <Tag key={index}>{el}</Tag>
                        )}
                    </TagCont>
                    <TextInput 
                        ref={InputRef}
                        type="text"
                        placeholder="Add a tag and press enter"
                        onKeyDown={e => AddTag(e, e.target.value)}
                    />
                </Column>
                
            </Row>
            <ExpandBtn onClick={() => setExpand(!expand)}>
                {expand === true ? "-" : "+"}
            </ExpandBtn>
        </Container>
    )
}