import React from 'react';
import {
  RadioTitle,
  RadioContainer,
  RadioLabel,
  RadioButton,
  RadioItem,
} from '../AddPetForm.styled';
import PropTypes from 'prop-types';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import Male from 'assets/images/desktop/male.svg';
import Female from 'assets/images/desktop/female.svg';

const SexField = ({ value }) => {
  return (
    <>
      <RadioTitle>
        The sex<StyledSpan>*</StyledSpan>
      </RadioTitle>
      <RadioContainer>
        <li>
          <RadioLabel isSelected={value === 'male'}>
            <RadioButton
              type="radio"
              name="sex"
              value="male"
              checked={value === 'male'}
            />
            <RadioItem>
              <img src={Male} alt="Male" />
            </RadioItem>
            Male
          </RadioLabel>
        </li>

        <li>
          <RadioLabel isSelected={value === 'female'}>
            <RadioButton
              type="radio"
              name="sex"
              value="female"
              checked={value === 'female'}
            />
            <RadioItem>
              <img src={Female} alt="Female" width="60px" height="60px" />
            </RadioItem>
            Female
          </RadioLabel>
        </li>
      </RadioContainer>
    </>
  );
};

SexField.propTypes = {
  value: PropTypes.string,
};

export default SexField;