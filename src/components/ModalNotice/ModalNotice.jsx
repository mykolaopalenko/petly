import Container from 'components/Container';
import React from 'react';
import PropTypes from 'prop-types';
import { useGetNoticeByIdQuery } from 'redux/api/noticesApi';
import Loader from 'components/Loader';
import {
  ImgWrapper,
  PetsImg,
  Category,
  CategoryName,
  TextContent,
  PetInfo,
  Title,
  PetData,
  CategoryData,
  DataItem,
  CategoryText,
  ValueData,
  ValueText,
  Comments,
  CommentsTitle,
  NoticeContainer,
  Buttons,
} from './ModalNotice.styled';
import Button from 'components/Ui-Kit/Button';

const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;

const ModalNotice = ({ id }) => {
  // const {
  //    _id,
  //    avatarURL,
  //    favorite,
  //    title,
  //    category,
  //    name,
  //    birthday,
  //    breed,
  //    location,
  //    sex,
  //    owner,
  //    comments,
  //    price,
  //    own,
  //  } = notice;

  const { data, isFetching, isLoading, isError } = useGetNoticeByIdQuery(id);
  console.log(data);
  //   console.log(data.price);
  const noItem = '-----------';
  const noPrice = '0';

  const onRedirect = () => {
    window.location = `tel:${data.owner.phone}`;
  };
  return (
    <>
      <NoticeContainer>
        {isFetching && <Loader />}
        {isError && <div>{isError.message}</div>}

        {data && (
          <>
            <PetInfo>
              <ImgWrapper>
                <PetsImg src={data.photoURL || altPosterUrl} />
                <Category>
                  <CategoryName>{data.category}</CategoryName>
                </Category>
              </ImgWrapper>

              <TextContent>
                <Title>{data.title}</Title>
                <PetData>
                  <CategoryData>
                    <DataItem>
                      <CategoryText>Name:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Birthday:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Breed:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Location:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>The sex:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Email:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Phone:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Price:</CategoryText>
                    </DataItem>
                  </CategoryData>
                  <ValueData>
                    <DataItem>
                      <ValueText>{data.name}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.birthDate}</ValueText>
                    </DataItem>
                    <DataItem>
                      {data.breed === 'Unknown' ? (
                        <ValueText>{noItem}</ValueText>
                      ) : (
                        <ValueText>{data.breed}</ValueText>
                      )}
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.location}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.sex}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.owner.email}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.owner.phone}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.price || noPrice} $</ValueText>
                    </DataItem>
                  </ValueData>
                </PetData>
              </TextContent>
            </PetInfo>
            <Comments>
              <CommentsTitle>Comments: </CommentsTitle>
              {data.comments}
            </Comments>

            <Buttons>
              <Button name="addToFavorite" type="button">
                Add to favorite
              </Button>

              <Button onClick={onRedirect} name="contacts" type="button">
                Contacts
              </Button>
            </Buttons>
          </>
        )}
      </NoticeContainer>
    </>
  );
};

ModalNotice.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ModalNotice;
