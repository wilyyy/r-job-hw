import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 250px;
    font-family: 'Raleway', sans-serif;
`;

const Row = styled.div``;

const Column = styled.div``;

const ImageCont = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
`;

export default function StudentCard({
    city,
    company,
    email,
    firstName,
    lastName,
    grades,
    pic
}){
    return (
        <Container>
            <Image src="https://placekitten.com/200/300" layout="fill"/>
        </Container>
    )
}