import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
// import CarouselCard from './components/CarouselCards'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'
// import projects from './projects'
// import { Carousel } from "react-configurable-carousel"
// import Carousel from './components/Carousel'

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#fff',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <GlobalStyles />
        <Header />

          <Container className='container'>
            {content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
              {/* <h2>COURSES</h2>
              <Carousel 
                // arrows={true}
                dotsNavigation={true}
                dotsNavigationInside={false}
                width={"100%"}
                height={"auto"}
                carouselStyle={"2d"}
                dotNavigationFillColor={"#ff0099"}
                autoScrollInterval={3000}
                autoScrollClickDelay={10000}
                outOfFocusDarken={true}
                >
                  {projects.map((item, index) => (
                    <CarouselCard key={index} item={item} />
                ))}
              </Carousel> */}

          </Container>
          
        <Footer />
    </ThemeProvider>
  )
}

export default App
