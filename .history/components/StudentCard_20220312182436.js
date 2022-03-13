import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 230px;
    font-family: 'Raleway', sans-serif;
    padding: 20px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 500px;
    height: 210px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: 210px;

    ${({info}) => info && `
        width: auto;
        height: auto;
    `}

    ul {
        list-style-type: none;
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

export default function StudentCard({
    city,
    company,
    email,
    firstName,
    lastName,
    grades,
    skill,
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
                    <ul>
                        <li>Email: {email}</li>
                        <li>Company: {company}</li>
                        <li>Skill: {skill}</li>
                        <li>Average: {grades.reduce((el, index) => Number(el) + Number(index), 0) / grades.length}%</li>
                    </ul>
                </Column>
            </Row>
        </Container>
    )
}