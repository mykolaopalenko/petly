import React from 'react';
import PropTypes from 'prop-types';
import { Container, AuthLink, Link } from './AuthNav.styled';
import { FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { getLoginFilled } from 'constants/loginIsFilled';

const AuthNav = ({ closeMenu }) => {
  const location = useLocation();
  const loginIsFilled = getLoginFilled(location.pathname);

  return (
    <Container>
      <Link to="/login" onClick={closeMenu} isactive={loginIsFilled ? 1 : 0}>
        <FormattedMessage id="login" />
      </Link>
      <Link to="/register" onClick={closeMenu}>
        <FormattedMessage id="registration" />
      </Link>
    </Container>
  );
};

export default AuthNav;

AuthNav.propTypes = {
  closeMenu: PropTypes.func,
};
