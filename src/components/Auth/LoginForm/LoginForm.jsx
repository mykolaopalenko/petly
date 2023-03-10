import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'redux/api/userApi';
import { Formik } from 'formik';
import LoginInputs from './LoginInputs';
import {
  loginInitialValues as initialValues,
  loginValidationSchema as validationSchema,
} from './LoginValidation';
// styles from RegisterForm
import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  LoginLink,
  Paragraph,
  ErrorMessage,
} from '../RegisterForm/RegisterForm.styled';
import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
import { FormattedMessage } from 'react-intl';

// main function

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleSubmit = values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    loginUser(credentials);
  };

  return (
    <>
      {isLoading && <Loader />}
      <ModalWrapper>
        <ModalContent>
          <FormTitle>
            <FormattedMessage id="login" />
          </FormTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <FormWrapper>
                  <LoginInputs />
                  <ButtonWrapper>
                    <Button name="filled" type="submit" disabled={isSubmitting}>
                      <FormattedMessage id="submit" />
                    </Button>
                  </ButtonWrapper>
                </FormWrapper>
              );
            }}
          </Formik>
          <Paragraph>
            <FormattedMessage id="questionHaveAnAccount" />{' '}
            <LoginLink to="/register">
              <FormattedMessage id="register" />
            </LoginLink>
          </Paragraph>
          {isError && <ErrorMessage>Invalid password or email</ErrorMessage>}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default LoginForm;
