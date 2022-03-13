import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    border-bottom: 1px solid #c2c2c2;
    font-family: 'Raleway', sans-serif;
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