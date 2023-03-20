import styled from 'styled-components'

export const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 'auto';
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(10, 10, 2000, 0.90);
  margin: 5px 5px 20px 0;
  padding: 15px;
  flex-direction: ${({ layout }) => layout || 'row'}; // row or row-reverse to define img position
  perspective: 1000px;

  img {

    width: 90%;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.8rem;
    margin-left: 70px;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
