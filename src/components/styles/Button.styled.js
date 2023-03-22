import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 30px;
  background-color: ${({ bg }) => bg || '#fff'}; // these lines allow for inline changes and if not defined will default to white
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`
 
export const SmButton = styled.button`
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, .45);
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  margin-left: 70px;
  padding: 7px 25px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.6;
    transform: scale(0.90);
  }
`