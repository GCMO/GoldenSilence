import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }
  
  a {
    border: 2px solid #000;
    border-radius: 50%;
    color: #000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 50px;
    width: 50px;
    /* text-decoration: none; */
    font-size: 30px;
    
    &:hover {
      color: #41a1cc;
      border: 4px solid #41a1cc;
    }
  }
  
`
