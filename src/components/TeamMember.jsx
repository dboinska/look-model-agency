import { ModelImg, ModelTxt } from './Model';

const TeamMember = ({ imgSmallSize, employee, name }) => (
  <div>
    <ModelImg img={imgSmallSize} alt={name} />
    <ModelTxt employee={employee} name={name} />
  </div>
);

export default TeamMember;
