import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 250px;
    font-family: 'Raleway', sans-serif;
    border-bottom: 1px solid #000;
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
            <ImageCont>
                <img src={pic} />
            </ImageCont>
        </Container>
    )
}