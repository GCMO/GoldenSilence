import { StyledCard } from './styles/Card.styled'
import { Image } from './styles/Header.styled';

const CarouselCard = ({ item: { id, title, description, features, link, image } }) => {
  return (
    <>
    <StyledCard layout={id % 2 === 1 && 'row-reverse'}> 
      <div>
        <h2>{title}</h2>
        <p> - {description}</p>
        <p> - {features}</p>
        <a href={link}>Click for Demo</a>
      </div>

      <div>
        <Image src={`/images/${image}`} alt='projects' />
      </div>
    </StyledCard>
    </>
  )
}

export default CarouselCard;