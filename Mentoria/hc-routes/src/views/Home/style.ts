import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin:0 auto;
`

export const Card = styled.div`
  background-color: black;
  text-align: center;
  padding: 12px;
  color: white;
  border-radius: 12px;

  button{
    background-color: green;
    color: white;
    transition: 0.3s;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      background-color: blue;
      color: yellow;
    }

   
  }
`