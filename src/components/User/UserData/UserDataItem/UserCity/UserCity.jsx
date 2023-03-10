import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import { FieldWrapper } from '../UserDataItem.styled';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';
import { toast } from 'react-toastify';
import cities from 'assets/files/uaCities.json';
import { List, ListItem } from './UserCity.styled';
import { useIntl } from 'react-intl';

const UserCity = ({ isUpdating, setIsUpdating }) => {
  const { formatMessage } = useIntl();
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { city: user?.city || '' };
  const [filteredCities, setFilteredCities] = useState([]);

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.city) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.city === user.city) return;

    // create formData
    const data = new FormData();
    data.append('city', values.city);
    const { data: response } = await updateUser(data);
    if (response.code === 200)
      toast.info(formatMessage({ id: 'toastCityUpdated' }));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors, setFieldValue }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label={formatMessage({ id: 'cityLabel' })}
              name="city"
              type="city"
              disabled={isDisabled}
              placeholder={user.city || ''}
            />
            <UserUpdateButton
              type="submit"
              disabled={isUpdating && isDisabled}
              isInputDisabled={isDisabled}
              onClick={() => {
                if (!values.city) {
                  values.city = user.city;
                  handleClick(values);
                }
                if (errors.city) return;
                handleClick(values);
              }}
            />
            {isLoading && <Loader />}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

UserCity.propTypes = {
  isUpdating: PropTypes.bool,
  setIsUpdating: PropTypes.func,
};

export default UserCity;
