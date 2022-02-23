import classNames from 'classnames';
import './heading.scss';
const AVAILABLE_POSITIONS = ['left', 'right', 'center'];
const Heading = ({
  children,
  heading,
  headingPosition = 'left',
  showBottomLine,
}) => {
  const headingStyle = classNames('heading', {
    [`heading--${headingPosition}`]:
      AVAILABLE_POSITIONS.includes(headingPosition),
    'heading--bottomLine': showBottomLine,
  });
  return (
    <div className={headingStyle}>
      <span className="headingSection">{heading}</span>
      {children}
    </div>
  );
};

export default Heading;
