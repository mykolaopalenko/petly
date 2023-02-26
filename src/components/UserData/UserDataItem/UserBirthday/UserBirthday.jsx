import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import { useUpdateUserMutation } from 'redux/api/userApi';
import {
  FieldWrapper,
  MyDatePickerNew,
  Label,
  Title,
  ErrorStyle,
} from '../UserDataItem.styled';
import { validationSchema } from './validation';
import { convertStringToDate, convertDateToString } from 'helpers/date';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';

const MyDatePicker = ({ name = '', isDisabled, val, handleChange }) => {
  const [field] = useField(name);
  const [startDate, setStartDate] = useState(val);
  return (
    <MyDatePickerNew
      {...field}
      selected={startDate}
      disabled={isDisabled}
      onChange={date => {
        handleChange(date);
        setStartDate(date);
      }}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

const UserBirthday = ({ user }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  // const user = useSelector(selectUserState);

  const val = () => {
    let date;
    if (user.birthday === null) {
      date = null;
    } else {
      date = convertStringToDate(user.birthday);
    }
    return date;
  };

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const initialValues = { birthday: user?.birthday || '00.00.0000' };

  const handleClick = () => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
  };

  const handleSubmit = values => {
    // if (!isDisabled) {
    //   return;
    // }
    // if (values.birthday === user.birthday) {
    //   return;
    // }
    console.log(values);
    let dateMDY;
    if (values.birthday === null) {
      dateMDY = '00.00.0000';
    } else {
      dateMDY = convertDateToString(values.birthday);
    }

    // create formData
    const data = new FormData();
    data.append('birthday', dateMDY);
    updateUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <FieldWrapper>
            <Label>
              <Title>Birthday</Title>

              <MyDatePicker
                isDisabled={isDisabled}
                val={val}
                name="birthday"
                handleChange={date => {
                  setFieldValue('birthday', date);
                }}
              />

              <ErrorStyle name="birthday" component="div" />
            </Label>
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={() => handleClick(values)}
            />
            {isLoading && <Loader />}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  val: PropTypes.any,
  handleChange: PropTypes.func,
};

UserBirthday.propTypes = {
  user: PropTypes.object,
};

export default UserBirthday;
