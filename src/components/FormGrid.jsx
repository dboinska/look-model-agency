import styled, { css } from 'styled-components/macro';
import { AiOutlineCheck } from 'react-icons/ai';
import { ErrorMessage } from 'formik';

export const FormGrid = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(20px, auto);

  @media screen and (min-width: 992px) {
    max-width: 380px;
  }
  /* @media screen and (min-width: 1200px) {
    max-width: 380px;
  } */
`;

const fontSize = css`
  font-size: 1rem;
`;

const formAnnouncement = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 2.8rem;
`;

export const Label = styled.label`
  ${fontSize};
  text-transform: uppercase;
  color: var(--black);
  width: ${props => props.width || '160px'};

  @media screen and (min-width: 564px) {
    width: 176px;
    padding: 0 1rem;
    font-size: 1rem;
    max-width: 220px;
  }
`;

export const StyledForm = styled.div`
  font-weight: 600;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 820px) {
    width: 90%;
    padding: 1rem;
  }

  .agreement {
    margin: 2rem auto auto auto;
    font-weight: 400;
  }

  .headingSection {
    padding: 2rem 2rem 0 2rem;
  }

  .errorAnnouncement {
    color: var(--error-color);
    ${fontSize};
    ${formAnnouncement};
  }

  .successAnnouncement {
    color: var(--success-color);
    ${formAnnouncement};
    ${fontSize};
  }

  button[type='submit'] {
    /* Style z Link */
    background-color: var(--black);
    text-transform: uppercase;
    font-weight: 500;
    padding: 6px 12px;
    color: var(--white);
    font-size: 1rem;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      background-color: var(--second-color);
      color: var(--black);
    }

    @media screen and (min-width: 820px) {
      margin-top: 24px;
      padding: 12px 24px;
      font-size: 1.2rem;
    }
  }
  textarea {
    border: none;
    border-bottom: 2px solid var(--second-color);
    text-align: right;
  }
`;

export const RequireContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (min-width: 820px) {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  input {
    border: none;
    border-bottom: 2px solid var(--second-color);
    text-align: right;
    padding-right: 1rem;
    width: 170px;
    ${fontSize};

    &[type='checkbox'] {
      width: auto;
      margin: 1rem 1rem 1rem 0;
    }
    @media screen and (min-width: 768px) {
      width: 230px;
    }

    @media screen and (min-width: 992px) {
      width: ${props => props.width || '180px'};
    }
  }
`;

export const FieldMessage = ({ touched, errors, fieldName }) => (
  <>
    <ErrorMessage name={fieldName}>
      {msg => <div className="errorAnnouncement">{errors[fieldName]}</div>}
    </ErrorMessage>
    {touched[fieldName] && !errors[fieldName] && (
      <div className="successAnnouncement">
        <AiOutlineCheck />
      </div>
    )}
  </>
);
