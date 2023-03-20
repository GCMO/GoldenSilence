import { StyledHeader, Nav, Image, } from './styles/Header.styled';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';
import { GiMountaintop } from "react-icons/gi";
import { BsDownload } from "react-icons/bs";


export default function Header() {
  return (
    <StyledHeader>
      <Container>

        <Nav>
          
          <h1> <GiMountaintop style={{marginBottom:"-6px"}}/> <b> GOLDEN SILENCE YOGA</b> </h1>
          <a href="./public/images/viniyasaflow.jpeg" download="ViniyasaFlow.pdf">
            <Button  bg='#41a1cc' color='black'> SuryaNamaskar  
              <BsDownload style={{ fontSize: "18px", color:"black", marginLeft:"10px", }}/>
            </Button>
          </a>
          {/* <BrowserRouter>
              <Routes>
              <Route path="/" element={<NavLink>Home</NavLink>} />
              <Route path="/about" element={<NavLink>About</NavLink>} /> 
              <Route path="/projects" element={<NavLink>Projects</NavLink>} />
              <Route path="/contact" element={<NavLink>Contact</NavLink>} />
              </Routes>
            </BrowserRouter> */}
        </Nav>

        <Flex>
          <div>
            <h2>IN A FEW WORDS: </h2>

            <p>
            <b>ABOUT:</b> My journey began in 1997 when I started practicing meditation. I took a deep dive through the SiddhaYoga teachings and then acquired a BA & MA in Sanskrit and Oriental Philosophy. In 2014 after receiving a Yoga Alliance 200h certification, I began to teach Yoga, Meditation and Philosophy.   
            <br/>
             <b>WHAT:</b> Multi-level Viniyasa Classes, Men's Yoga and Restorative Classes  <br/>
             <b>WHEN:</b> <a href="https://datelist.io/calendars/2028/manage?date=2023-03-20&mode=calendar" >SEE SCHEDULE</a>   <br/>
             
            </p>

            {/* <Button bg='#ff0099' color='#fff'>
              Download CV
            </Button> */}
          </div>

          <Image src='/images/profile.png' alt='profile pic' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
