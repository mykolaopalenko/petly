import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendListItem,
  FriendLinkTitle,
  FriendLink,
  FriendTime,
  TextWrapper,
  FriendImg,
  FriendContentList,
  TimeBtn,
} from './FriendItem.styled.jsx';
import TimeTable from './TimeTable';
import defaultImage from '../data/friend-default-image.png';

export const FriendItem = ({
  title,
  url,
  imageUrl,
  addressUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: weekDays[index], ...day };
    });

  return (
    <FriendListItem>
      <FriendTitle>
        <FriendLinkTitle href={url} target="_blank">
          {title}
        </FriendLinkTitle>
      </FriendTitle>

      <FriendContentWrapper>
        <FriendLink href={addressUrl} target="_blank">
          <FriendImg
            src={imageUrl ?? defaultImage}
            alt={title}
            loading="lazy"
          />
        </FriendLink>

        <FriendContentList>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 3000);
            }}
          >
            {workDays === undefined || workDays === null ? (
              <>
                <FriendText>Time:</FriendText>
                <p>--------------</p>
              </>
            ) : (
              <>
                {workDays[0] && workDays[0].isOpen ? (
                  <>
                    <FriendTime>Time:</FriendTime>
                    <TimeBtn>
                      {workDays[0].from}-{workDays[0].to}
                    </TimeBtn>
                  </>
                ) : (
                  <>
                    <FriendTime>Time:</FriendTime>
                    <TimeBtn>Closed</TimeBtn>
                  </>
                )}
                {isVisible || <TimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>Address:</FriendText>
            {addressUrl ? (
              <FriendLink href={addressUrl} target="_blank">
                {address}
              </FriendLink>
            ) : (
              <p>------------</p>
            )}
          </TextWrapper>

          <TextWrapper>
            <FriendText>Email:</FriendText>
            {email ? (
              <FriendLink href={`mailto:${email}`}>{email}</FriendLink>
            ) : (
              <p>------------</p>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>Phone:</FriendText>
            {phone ? (
              <FriendLink href={`tel:${phone}`}>{phone}</FriendLink>
            ) : (
              <p>------------</p>
            )}
          </TextWrapper>
        </FriendContentList>
      </FriendContentWrapper>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  workDays: PropTypes.array,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  addressUrl: PropTypes.string,
};

export default FriendItem;
