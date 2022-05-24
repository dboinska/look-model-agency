import classNames from 'classnames';
import styled, { css } from 'styled-components/macro';

const AVAILABLE_POSITIONS = ['left', 'right', 'center', 'none'];
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
    <StyledHeading className={headingStyle}>
      <span className="headingSection">{heading}</span>
      {children}
    </StyledHeading>
  );
};

const line = css`
  content: '';
  height: 1px;
  background: var(--gray);
  flex: 0.9 1 auto;
`;

const StyledHeading = styled.div`
  .headingSection {
    text-transform: uppercase;
    font-size: 1.6rem;
    color: var(--gray);
    display: flex;
    align-items: center;
    gap: 1rem;

    &::after {
      ${line}
    }
  }

  &.heading--none {
    .headingSection:before,
    .headingSection:after {
      display: none;
    }
  }

  &.heading--right {
    .headingSection:before {
      ${line}
    }
    .headingSection:after {
      display: none;
    }
  }

  &.heading--center {
    .headingSection:before {
      ${line};
    }
  }
`;

export default Heading;
