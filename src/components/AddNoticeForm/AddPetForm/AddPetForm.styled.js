import styled from 'styled-components';
import { Form, Field } from 'formik';
import { theme, breakpoints } from 'constants/theme';
import Plus from '../../../assets/images/desktop/plus.svg';
import { useDropzone } from 'react-dropzone';
import MyDatePicker from './StepOne/DatePicker';
import { motion } from 'framer-motion';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h3`
  color: ${theme.colors.mainText};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: ${theme.fontSizes.xxl};
`;

export const Text = styled.p`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  margin: 20px 0;
  text-align: center;
`;

export const ButtonFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonFilterItem = styled.li`
  margin-right: 15px;
  margin-bottom: 28px;
`;

export const ButtonFilterLabel = styled(motion.label)`
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: ${({ theme, width }) => (width ? width : 'auto')};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, name, selected }) =>
    name === 'filled' || selected ? theme.colors.accent : 'transparent'};

  color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'transparent':
        return theme.colors.mainText;
      case 'filled':
        return theme.colors.lightText;
      case 'learnMore':
        return theme.colors.accent;
      case 'filter':
        return selected ? theme.colors.lightText : theme.colors.mainText;
      default:
        return theme.colors.lightText;
    }
  }};

  transition: color ${({ theme }) => theme.transitionTiming},
    background-color ${({ theme }) => theme.transitionTiming},
    border-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme, name }) =>
      name === 'learnMore' ? 'transparent' : theme.colors.hover};
    border-color: ${({ theme, name }) =>
      name === 'learnMore' ? theme.colors.secondaryHover : theme.colors.hover};
    color: ${({ theme, name }) =>
      name === 'learnMore'
        ? theme.colors.secondaryHover
        : theme.colors.lightText};
  }
`;

export const ButtonFilterInput = styled(Field)`
  display: none;
  // margin-right: 15px;
  // margin-bottom: 28px;
`;

export const DatePickerInput = styled.input`
  position: relative;
  width: 100%;
  border-radius: 40px;
  margin-bottom: 12px;
  cursor: pointer;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primaryText};

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const RadioContainer = styled.ul`
  display: flex;
  gap: 90px;
  margin-top: 31px;
  margin-bottom: 40px;
`;

export const RadioTitle = styled.p`
  margin-top: 40px;
`;

export const RadioItem = styled.div`
  width: 60px;
  height: 60px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  color: ${({ isSelected }) => (isSelected ? '#F59256' : 'inherit')};
`;

export const RadioButton = styled(Field)`
  display: none;
`;

export const LoadImageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  margin-top: 12px;
  margin-bottom: 28px;
  color: ${theme.colors.mainText};
`;

export const LoadImgLabel = styled.label`
  cursor: pointer;
`;

export const LoadImgInput = styled.input`
  display: none;

  // display: block;
  // width: 140px;
  // height: 140px;
  // border-radius: 20px;
  // background: ${theme.colors.mainBackground};
  // margin-top: 12px;
  // margin-bottom: 28px;
  // color: ${theme.colors.mainText};
`;

export const LoadImgPlus = styled.img`
  width: 47px;
  height: 47px;
`;

export const DropZoneWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropZoneInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
`;

export const TextareaLabel = styled.label`
  margin-top: 20px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
  }
`;

export const Textarea = styled(Field)`
  position: relative;
  width: 100%;
  border-radius: 40px;
  margin-top: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primaryText};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  @media(min-width: ${breakpoints[1]}px) {
    border-radius: 20px;
    margin-top: 12px;
    font-size: ${theme.fontSizes.s};
  };
`;
export const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  font-size: 14px;
  text-align: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 120px;
  ${theme.mq.mobileOnly} {
    top: 50px;
    font-size: 12px;
  }
`;
