import { StyledHeader, Nav, NavLink, Image, } from './styles/Header.styled';
import { BrowserRouter, Link } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';
import { GiMountaintop } from "react-icons/gi";
import { BsDownload } from "react-icons/bs";
import { ReactNavbar } from "react-responsive-animate-navbar";


export default function Header() {

  const Resources = () => <h1>RESOURCES</h1>
  const Articles = () => <h1>ARTICLES</h1>
  const Books = () => <h1>BOOKS</h1>

  return (
    <StyledHeader>
      <Container>

        <Nav>
            
          <h1> <GiMountaintop style={{marginBottom:"-6px"}}/> 
            <b> GOLDEN SILENCE</b>
          </h1>
              
          <BrowserRouter>
              <Link path="/projects"><NavLink>Resources</NavLink></Link>
              <Link path="/Articles"><NavLink>Articles</NavLink></Link> 
              <Link path="https://datelist.io/c/2VZVENWMLc?l=default"><NavLink>Schedule</NavLink></Link>
          </BrowserRouter>

         

        </Nav>

        <Flex>
          <div>
            <h2>IN A FEW WORDS: </h2>

            <p>
              <b>ABOUT:</b> My journey began in 1997 when I started practicing meditation. Shortly after I acquired a BA & MA in Sanskrit and Indian Philosophy. In 2014 after receiving a Yoga Alliance 200h certification, I began to teach Yoga, Meditation and Philosophy Courses.   
              <br/>
              <b>WHAT:</b> Multi-level Viniyasa Classes, Men's Yoga and Restorative Classes  
              <br/>
              <b>WHEN:</b> 
              <b><a href="https://datelist.io/c/2VZVENWMLc?l=default" style={{color: "purple"}} > SEE SCHEDULE</a></b>   
              <br/>
              {/* <a href="/viniyasaflow.jpeg" download >
                <Button  bg='#41a1cc' color='black'> SuryaNamaskar  
                  <BsDownload style={{ fontSize: "18px", color:"black", marginLeft:"10px", }}/>
                </Button>
              </a> */}
             
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
