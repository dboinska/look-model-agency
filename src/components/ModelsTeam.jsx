import ColumnSection from './ColumnSection';
import Heading from './Heading';
import { H2 } from './Headers';
import TeamCarousel from './TeamCarousel';
import { team } from '../data/team';

const ModelsTeam = () => {
  return (
    <ColumnSection>
      <div className="div__center">
        <Heading heading="Team" headingPosition="center">
          <H2 variant="marginNone">Super models</H2>
        </Heading>
      </div>
      <TeamCarousel team={team} />
    </ColumnSection>
  );
};

export default ModelsTeam;
