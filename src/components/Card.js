import {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { StyledCard } from './styles/Card.styled'
import { SmButton } from './styles/Button.styled';
import { Image } from './styles/Header.styled';

const Card = ({ item: { id, title, body, details, image, backTitle, backBody, backDetails } }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  const styledCardProps = {
    layout: id % 2 === 1 && 'row-reverse',
  }

  const hoverAnimation = {
    // scale: 1.05,
    rotate:.5,
  }

  const tapAnimation = {
    scale: .45,
    rotate: -5,
  }
  
  
  return (
    <div onClick={handleClick} className="clickCard">
        <AnimatePresence>
          {!isFlipped && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={hoverAnimation}
              whileTap={tapAnimation}
            > 
            <StyledCard {...styledCardProps}>
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <Image src={`images/${image}`} alt="YogaAsanas" />
            </div>
            </StyledCard>
          </motion.div>
          )}
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: .5 }}
              whileHover={hoverAnimation}
              whileTap={tapAnimation}
            >
              <StyledCard {...styledCardProps}>
                <div>
                  <h2>{backTitle}</h2>
                  <SmButton bg='#41a1cc' color='white'>JOIN CLASS</SmButton>
                </div>
                <div>
                  <p className='backText'>{body}</p>
                  <p className='backDetails'>{details}</p>
                </div>
              </StyledCard>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default Card;
