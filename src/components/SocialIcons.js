import { FaMobile, FaFacebook, FaMailBulk } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='tel:+46 0722265758' >
          <FaMobile/>
        </a>
      </li>
      <li>
        <a href='https://facebook.com/profile.php?id=100069052229299'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='mailto:orlandigcm@gmail.com'>
        <FaMailBulk />
        </a>
      </li> 
    </StyledSocialIcons>
  )
}

