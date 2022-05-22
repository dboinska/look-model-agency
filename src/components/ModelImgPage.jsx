import { useParams } from 'react-router-dom';
import { team } from '../data/team';
import SinglePage from './SinglePage';

const ImgPage = () => {
  const { id } = useParams();
  const teamPhoto = team.find(photo => photo.id === id);
  const photoIndex = team.findIndex(photo => photo.id === id);
  const lastIndex = team.length - 1;
  const prevPhoto = team[photoIndex > 0 ? photoIndex - 1 : lastIndex];
  const nextPhoto = team[photoIndex < lastIndex ? photoIndex + 1 : 0];

  const prevPhotoURL = `/models/${prevPhoto.id}`;
  const nextPhotoURL = `/models/${nextPhoto.id}`;

  return (
    <SinglePage
      currentPhoto={teamPhoto}
      id={id}
      prevPhoto={prevPhotoURL}
      nextPhoto={nextPhotoURL}
    />
  );
};

export default ImgPage;
