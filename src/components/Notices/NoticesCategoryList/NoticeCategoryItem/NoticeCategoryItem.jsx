import { useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  useDeleteNoticeMutation,
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
} from 'redux/api/noticesApi';
import { selectIsAuthState, selectUserState } from 'redux/user/userSelectors';
import getAge from 'js';
import Button from 'components/Ui-Kit/Button';
import ModalNotice from 'components/Notices/ModalNotice';
import ModalComponent from 'components/Modal';
import { AnimatePresence } from 'framer-motion';
import { IoTrashSharp } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
import {
  CardNotice,
  ImageBox,
  Image,
  Title,
  Thead,
  Text,
  ContainerInfo,
  CategoryBox,
  CategoryName,
  ContainerButton,
  ToggleFavoriteButton,
} from './NoticeCategoryItem.styled';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { theme } from 'constants/theme';
import Loader from 'components/Loader';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { addFavorites } from 'redux/favorites/favoritesSlice';

const NoticeCategoryItem = ({
  _id,
  photoURL,
  category,
  title,
  breed,
  location,
  birthDate,
  price,
  owner,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthState);
  const user = useSelector(selectUserState);
  const favorites = useSelector(selectFavoritesState);
  const showButtonDelete = user ? owner === user._id : false;

  const place = location.split(',');
  const city = place[0];
  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  const isFavorite = favorites?.includes(_id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteNotice, { isLoading: deleting }] = useDeleteNoticeMutation();
  const [addNoticeToFavorite, { isLoading: adding }] =
    useAddNoticeToFavoriteMutation();

  const [deleteNoticeFromFavorite, { isLoading: removing }] =
    useRemoveNoticeFromFavoriteMutation();

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const toggleFavorite = async noticeId => {
    if (!isAuth) {
      toast('Please, register or login to add notice to favorite');
      return;
    }
    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(`Notice has been removed from favorites`);
      return;
    }
    await addNoticeToFavorite(noticeId);
    toast.info(`Notice has been added to favorites`);
  };

  const onDelete = () => {
    const confirmed = confirm('Are you sure you want to delete this ad?');
    if (confirmed) {
      deleteNotice(_id);
    } else {
      return;
    }
  };

  const isLoading = deleting || adding || removing;

  return (
    <>
      {isLoading && <Loader />}
      <CardNotice>
        <ImageBox>
          <Image
            src={photoURL ? photoURL : altPosterUrl}
            alt={title}
            loading="lazy"
          />
        </ImageBox>
        <ToggleFavoriteButton
          isFavorite={isFavorite}
          type="button"
          onClick={() => toggleFavorite(_id)}
        >
          {<IoIosHeart size="28px" />}
        </ToggleFavoriteButton>
        <CategoryBox>
          <CategoryName>{category}</CategoryName>
        </CategoryBox>
        <ContainerInfo>
          <Title>{title}</Title>
          <table>
            <tbody>
              <tr>
                <Thead>Breed:</Thead>
                <Text>{breed}</Text>
              </tr>
              <tr>
                <Thead>Place:</Thead>
                <Text>{city}</Text>
              </tr>
              <tr>
                <Thead>Age:</Thead>
                <Text>{getAge(birthDate)}</Text>
              </tr>

              {category === 'sell' && (
                <tr>
                  <Thead>Price:</Thead>
                  <Text>{price} $</Text>
                </tr>
              )}
            </tbody>
          </table>
        </ContainerInfo>
        <ContainerButton>
          <Button
            id={_id}
            name="learnMore"
            type="button"
            width="248px"
            onClick={() => {
              setModalIsOpen(true);
              document.body.classList.add('modal-open');
            }}
          >
            Learn more
          </Button>
          {showButtonDelete && (
            <Button
              name="learnMore"
              type="button"
              width="248px"
              onClick={() => onDelete()}
            >
              Delete
              <IoTrashSharp style={{ marginLeft: '12px' }} />
            </Button>
          )}
        </ContainerButton>
      </CardNotice>
      <AnimatePresence>
        {modalIsOpen && (
          <ModalComponent closeModal={closeModal} key="popUp">
            <ModalNotice id={_id} onClose={closeModal} />
          </ModalComponent>
        )}
      </AnimatePresence>
    </>
  );
};

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default NoticeCategoryItem;