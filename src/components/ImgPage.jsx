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

  const featureParagraph =
    'Donec ac est vel justo cursus rutrum ac eleifend ex.Pellentesque dapibus venenatis enim. Praesent massa libero, porta eu dolor id, tristique rutrum lectus. Sed dapibus, sapien euismod tempus efficitur, sapien velit placerat lectus, eu lobortis enim nulla vel velit. Nulla non.';

  const header = 'Photo model';

  return (
    <SinglePage
      currentPhoto={portfolioPhoto}
      id={id}
      prevPhoto={prevPhotoURL}
      nextPhoto={nextPhotoURL}
      featureParagraph={featureParagraph}
      header={header}
    />
  );
};

export default ImgPage;
