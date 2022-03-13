import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    font-family: 'Raleway', sans-serif;
`;

const StudentCard = ({
    city,
    company,
    email,
    firstName,
    lastName,
    grades,
    pic
}) => {
    return (
        <Container>
            <Image 
        </Container>
    )
}

export default StudentCard;