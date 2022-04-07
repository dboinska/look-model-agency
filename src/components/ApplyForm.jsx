import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import FeatureSection from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import styled, { css } from 'styled-components/macro';
import DragAndDrop from './DragAndDrop';
import { SignUpSchema } from './ValidationForm';
import Paragraph from './Paragraph';
import { AiOutlineCheck } from 'react-icons/ai';
import { useLocalStorageState } from './hookLocalStorage';

const LOCAL_STORAGE_KEY = 'customLocalStorageKey';
const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  city: '',
  postalCode: '',
  countryCode: '',
  birthDate: '',
  hairColor: '',
  eyeColor: '',
  height: '',
  weight: '',
  chestWidth: '',
  waistWidth: '',
  hipWidth: '',
  shoeSize: '',
  test: '',
};

const eyeColors = ['blue', 'green', 'brown', 'gray'];

export const FormValidationSchema = () => {
  const eyeOptions = eyeColors.map((product, key) => (
    <option value={product} key={key}>
      {product.toUpperCase()}
    </option>
  ));

  const [initialValues, handleUpdateForm] = useLocalStorageState({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  const [checkedOptional, setCheckedOptional] = useState(false);
  const handleChangeOptional = () => {
    setCheckedOptional(currentChecked => !currentChecked);
  };
  const [checkedRequired, setCheckedRequired] = useState(true);
  const handleChangeRequired = () => {
    setCheckedRequired(currentChecked => !currentChecked);
  };

  return (
    <FeatureSection flexDirection="column">
      <Heading heading="Application Form">
        <H2>Let's fill in the form!</H2>
      </Heading>
      <FormApply>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            handleUpdateForm(values);
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <Heading
                heading="personal details"
                headingPosition="none"
              ></Heading>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="firstName">First Name</Label>
                  <Field id="firstName" name="firstName" placeholder="Jane" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="firstName"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Field id="lastName" name="lastName" placeholder="Doe" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="lastName"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="birthDate">Birth Date</Label>
                  <Field
                    id="birthDate"
                    name="birthDate"
                    placeholder="01.01.2001"
                    type="date"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="birthDate"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="507123098"
                    type="text"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="phoneNumber"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
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
                  <Label htmlFor="address">Address</Label>
                  <Field
                    id="address"
                    name="address"
                    placeholder="Marszałkowska 3/12 "
                    type="text"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="address"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="city">City</Label>
                  <Field
                    id="city"
                    name="city"
                    placeholder="Warsaw"
                    type="text"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="city"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="countryCode">Country</Label>
                  <Field
                    id="countryCode"
                    name="countryCode"
                    placeholder="PL"
                    type="text"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="countryCode"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="postalCode">Postal code</Label>
                  <Field
                    id="postalCode"
                    name="postalCode"
                    placeholder="00-123"
                    type="text"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="postalCode"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor=""></Label>
                  <Label htmlFor=""></Label>
                </FieldContainer>
              </RequireContainer>
              <Heading
                heading="physical details"
                headingPosition="none"
              ></Heading>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="hairColor">Hair Color</Label>
                  <Field
                    id="hairColor"
                    name="hairColor"
                    placeholder="black"
                    type="string"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="hairColor"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="eyeColor">eye color</Label>
                  <Field name="eyeColor" as="select">
                    <option value={''}>
                      {`select a product`.toUpperCase()}
                    </option>
                    {eyeOptions}
                  </Field>

                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="eyeColor"
                  />
                </FieldContainer>
              </RequireContainer>

              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Field
                    id="height"
                    name="height"
                    placeholder="193"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="height"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Field
                    id="weight"
                    name="weight"
                    placeholder="60"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="weight"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
                <FieldContainer>
                  {' '}
                  <Label htmlFor="chestWidth">Chest Width (cm)</Label>
                  <Field
                    id="chestWidth"
                    name="chestWidth"
                    placeholder="87"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="chestWidth"
                  />
                </FieldContainer>

                <FieldContainer>
                  <Label htmlFor="waistWidth">Waist Width (cm)</Label>
                  <Field
                    id="waistWidth"
                    name="waistWidth"
                    placeholder="60"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="waistWidth"
                  />
                </FieldContainer>
              </RequireContainer>
              <RequireContainer>
                <FieldContainer>
                  <Label htmlFor="hipWidth">Hip Width (cm)</Label>
                  <Field
                    id="hipWidth"
                    name="hipWidth"
                    placeholder="90"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="hipWidth"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="shoeSize">shoe Size</Label>
                  <Field
                    id="shoeSize"
                    name="shoeSize"
                    placeholder="39"
                    type="number"
                  />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="shoeSize"
                  />
                </FieldContainer>
              </RequireContainer>

              <Heading heading="your photo" headingPosition="none"></Heading>
              <RequireContainer>
                <FieldContainer height="auto">
                  <Label width="200px">Face photo</Label>
                  <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
                </FieldContainer>
                <FieldContainer height="auto">
                  <Label width="200px">silhouette photo</Label>
                  <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
                </FieldContainer>
              </RequireContainer>
              <div className="agreement">
                <Paragraph>
                  The data controller is LOOK Model Agency Jackson's Street 567,
                  San Diego, California, United States. The data entered in the
                  form will be processed for the purpose of recruitment in
                  accordance with the <Link to="/regulations">regulations</Link>
                  .
                </Paragraph>

                <Checkbox
                  label="I consent to the processing of my
                    personal data in accordance with the Personal Data
                    Protection Act for the purpose of sending commercial
                    information. Providing personal information is voluntary. I
                    have been informed that I have the right to access my data,
                    the possibility of correcting it and requesting the
                    cessation of its processing. (Option required)"
                  checked={checkedRequired}
                  required="required"
                  className="checkbox"
                  onChange={handleChangeRequired}
                />
                <br />

                <Checkbox
                  label="I consent to the sending of information by e-mail and / or SMS
                  about upcoming events. (Optional option)"
                  checked={checkedOptional}
                  className="checkbox"
                  onChange={handleChangeOptional}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </FormApply>
    </FeatureSection>
  );
};

const fontSize = css`
  font-size: 0.8rem;
  @media screen and (min-width: 820px) {
    font-size: 1rem;
  }
`;

const FormApply = styled.div`
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
      width: 200px;
    }
  }

  select {
    text-transform: uppercase;
    border: none;
    width: 120px;
    border-bottom: 2px solid var(--second-color);
    text-align: right;
    ${fontSize};
    & option {
      text-transform: uppercase;
      font-size: 0.8rem;
    }

    @media screen and (min-width: 820px) {
      width: 200px;
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
    transform: var(--transition);
    transition: all 0.3s ease;

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
`;

const Label = styled.label`
  ${fontSize};
  text-transform: uppercase;
  color: var(--black);
  width: ${props => props.width || '160px'};

  @media screen and (min-width: 564px) {
    width: 200px;
    padding: 0 1rem;
    font-size: 1rem;
    max-width: 220px;
  }
`;

const RequireContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  @media screen and (min-width: 820px) {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Checkbox = ({ label, checked, required = false, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        required={required}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

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

const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  flex-wrap: wrap;
  height: ${props => props.height || '30px'};
  @media screen and (max-width: 820px) {
    width: 100vw;
  }
`;
