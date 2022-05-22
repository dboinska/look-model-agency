import { useParams } from 'react-router-dom';
import { portfolioPhotos } from '../data/PortfolioPhotos';
import SinglePage from './SinglePage';

const ImgPage = () => {
  const { id } = useParams();
  const portfolioPhoto = portfolioPhotos.find(photo => photo.id === id);
  const photoIndex = portfolioPhotos.findIndex(photo => photo.id === id);
  const lastIndex = portfolioPhotos.length - 1;
  const prevPhoto =
    portfolioPhotos[photoIndex > 0 ? photoIndex - 1 : lastIndex];
  const nextPhoto =
    portfolioPhotos[photoIndex < lastIndex ? photoIndex + 1 : 0];

  const prevPhotoURL = `/gallery/${prevPhoto.id}`;
  const nextPhotoURL = `/gallery/${nextPhoto.id}`;

  return (
    <SinglePage
      currentPhoto={portfolioPhoto}
      id={id}
      prevPhoto={prevPhotoURL}
      nextPhoto={nextPhotoURL}
    />
  );
};

export default ImgPage;
