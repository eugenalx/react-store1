import styled from "styled-components";
export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 792px) {
        width: fit-content;
        align-items: center;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 50px;
    }
}
`;
