import { Formik, Field, Form, ErrorMessage } from 'formik';

import { FeatureSectionMotion } from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import styled, { css } from 'styled-components/macro';
import { useLocalStorageState } from '../hooks/localStorage';
import Paragraph from './Paragraph';

import { ContactSchema } from './ValidationContactForm';

import { AiOutlineCheck } from 'react-icons/ai';

import { Label } from './ApplyForm';

const LOCAL_STORAGE_KEY = 'contactFormLocalStorageKey';
const INITIAL_VALUES = {
  name: '',
  email: '',
  title: '',
  message: '',
};

export const FormValidationSchema = () => {
  const [initialValues, handleUpdateForm] = useLocalStorageState({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  return (
    <FeatureSectionMotion direction="column" alignItems="left">
      <Heading heading="Contact Form">
        <H2>Write to us!</H2>
      </Heading>
      <Paragraph>
        If you can't find the information or want to ask a question, write to
        us!
      </Paragraph>
      <FormContact>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            handleUpdateForm(values);
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              {console.log(errors)}
              <Heading heading="your message" headingPosition="none"></Heading>

              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="name">Name</Label>
                  <Field id="name" name="name" placeholder="Jane" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="name"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="email"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="title">title</Label>
                  <Field id="title" name="title" placeholder="Title" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="title"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="message">message</Label>
                  {/* <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="28"
                    placeholder="Message"
                  ></textarea> */}
                  <Field
                    id="message"
                    name="message"
                    placeholder="message"
                    type="text"
                  >
                    {({ field, form, meta }) => {
                      return (
                        <textarea
                          id="message"
                          // name="message"
                          rows="4"
                          cols="21"
                          placeholder="Message"
                          value={field.value}
                          onChange={field.onChange}
                        ></textarea>
                      );
                    }}
                  </Field>
                  {/* <Field id="message" name="message" placeholder="message" /> */}
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="message"
                  />
                </FieldContainer>
              </RequireContainer>
              <ButtonContainer>
                <button type="submit">Send</button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </FormContact>
    </FeatureSectionMotion>
  );
};

const fontSize = css`
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 2.8rem;
`;

const FormContact = styled.div`
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
  }

  .successAnnouncement {
    color: var(--success-color);
    ${fontSize};
  }

  /* input {
    border: none;
    border-bottom: 2px solid var(--second-color);
    text-align: right;
    padding-right: 1rem;
    width: 200px;
    ${fontSize};

    @media screen and (min-width: 564px) {
      width: 230px;
    }
  } */
  input {
    border: none;
    border-bottom: 2px solid var(--second-color);
    text-align: right;
    padding-right: 1rem;
    width: 120px;
    ${fontSize};

    &[type='checkbox'] {
      width: auto;
      margin: 1rem 1rem 1rem 0;
    }

    @media screen and (min-width: 564px) {
      width: 230px;
    }
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

// const Label = styled.label`
//   ${fontSize};
//   text-transform: uppercase;
//   color: var(--black);
//   width: ${props => props.width || '160px'};

//   @media screen and (min-width: 564px) {
//     width: 180px;
//     padding: 0 1rem;
//     font-size: 1rem;
//     max-width: 120px;
//   }
// `;

const RequireContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* max-width: 500px; */
  margin: 0 auto;

  @media screen and (min-width: 820px) {
    /* max-width: 90%; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 80%;
  min-width: 300px;
  flex-wrap: wrap;
  margin: 0.4rem 0;

  justify-content: space-between;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;
const FieldMessage = ({ touched, errors, fieldName }) => (
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
