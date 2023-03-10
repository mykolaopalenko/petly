import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pageAnimation } from 'constants/animation';
import React from 'react';
import { Background, Images, Title, WrapContainer } from './Home.styled';
import { breakpoints } from 'constants/theme';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  return (
    <Background {...pageAnimation} transition={{ duration: 0.3 }}>
      <WrapContainer>
        <Title>
          <FormattedMessage id="homeMsg" values={{ break: <br /> }} />
        </Title>
        <Images
          src={portraitMobile}
          srcSet={`${portraitMobile} ${breakpoints[0]}w, ${portraitTablet} ${breakpoints[1]}w, ${portraitDesktop} ${breakpoints[2]}w`}
          alt="Girl with pappy"
        />
      </WrapContainer>
    </Background>
  );
};

export default Home;
