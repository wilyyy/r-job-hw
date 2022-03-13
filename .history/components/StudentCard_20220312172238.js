import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 250px;
    border-bottom: 1px solid #c2c2c2;
    font-family: 'Raleway', sans-serif;
`;

const Row = styled.div`
    display: flex;
    width: 500px;
    height: 230px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props=>props.width};
    height: ${props=>props.height};
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
            <Row>
                <ImageCont>
                    <img src={pic} />
                </ImageCont>
                <Column>
                    <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
                </Column>
            </Row>
        </Container>
    )
}