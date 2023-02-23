import React, { useState } from 'react';
import {
  ButtonFilterList,
  ButtonFilterItem,
  ButtonFilterLabel,
  ButtonFilterInput,
} from './AddPetForm.styled';
import Button from 'components/Ui-Kit/Button';
import PropTypes from 'prop-types';

const FilterCategory = ({ value }) => {
  return (
    <ButtonFilterList>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'lost-found'}>
          lost/found
          {/* <Button name="transparent" onClick={() => setlLostFound(true)}>
            lost/found
          </Button> */}
          <ButtonFilterInput
            type="radio"
            name="category"
            value="lost-found"
            checked={value === 'lost-found'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'in-good-hands'}>
          in good hands
          {/* <Button name="transparent" onClick={() => setInGoodHands(true)}>
            in good hands
          </Button> */}
          <ButtonFilterInput
            type="radio"
            name="category"
            value="in-good-hands"
            checked={value === 'in-good-hands'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'sell'}>
          sell
          {/* <Button name="transparent" onClick={() => setSell(true)}>
            sell
          </Button> */}
          <ButtonFilterInput
            type="radio"
            name="category"
            value="sell"
            checked={value === 'sell'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
    </ButtonFilterList>
  );
};

FilterCategory.propTypes = {
  value: PropTypes.string,
};

export default FilterCategory;