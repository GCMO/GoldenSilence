import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        {/* <img src='./images/logo_white.svg' alt='' /> */}
        <Flex>
          
            {/* <li> mobile: <img src="" alt=""></img> </li>
            <li> email: <img src="" alt=""></img> </li> */}
            {/* <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact Us</li> */}
          
          <SocialIcons />
        </Flex>

        <p>&copy; 2023 Gabriele's Yoga. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
