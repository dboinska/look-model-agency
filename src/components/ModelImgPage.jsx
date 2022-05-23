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

  const featureParagraph =
    'Donec ac est vel justo cursus rutrum ac eleifend ex.Pellentesque dapibus venenatis enim. Praesent massa libero, porta eu dolor id, tristique rutrum lectus. Sed dapibus, sapien euismod tempus efficitur, sapien velit placerat lectus, eu lobortis enim nulla vel velit. Nulla non.';

  return (
    <SinglePage
      currentPhoto={teamPhoto}
      id={id}
      prevPhoto={prevPhotoURL}
      nextPhoto={nextPhotoURL}
      featureParagraph={featureParagraph}
    />
  );
};

export default ImgPage;
