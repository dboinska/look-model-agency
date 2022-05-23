import { ModelImg, ModelTxt } from './Model';

const TeamMember = ({ imgSmallSize, category, title }) => (
  <div>
    <ModelImg img={imgSmallSize} alt={title} />
    <ModelTxt category={category} title={title} />
  </div>
);

export default TeamMember;
