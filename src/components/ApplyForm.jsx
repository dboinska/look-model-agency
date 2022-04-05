import { Formik, Field, Form, ErrorMessage } from 'formik';
import FeatureSection from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import DragAndDrop from './DragAndDrop';
import { SignUpSchema } from './ValidationForm';
import Paragraph from './Paragraph';
import { AiOutlineCheck } from 'react-icons/ai';

export const FormValidationSchema = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {};

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
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            postalcode: '',
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
          }}
          validationSchema={SignUpSchema}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Heading
                heading="personal details"
                headingPosition="none"
              ></Heading>

              <RequireContainer>
                <Label htmlFor="firstName">First Name</Label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <FieldMessage
                  touched={touched}
                  errors={errors}
                  fieldName="firstName"
                />

                <Label htmlFor="lastName">Last Name</Label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
                <FieldMessage
                  touched={touched}
                  errors={errors}
                  fieldName="lastName"
                />
              </RequireContainer>
              <RequireContainer>
                <Label htmlFor="birthDate">Birth Date</Label>
                <Field
                  id="birthDate"
                  name="birthDate"
                  placeholder="01.01.2001"
                  type="date"
                />
                {/* {errors.birthDate && touched.birthDate ? (
                  <div className="errorAnnouncement">{errors.birthDate}</div>
                ) : null} */}

                <FieldMessage
                  touched={touched}
                  errors={errors}
                  fieldName="birthDate"
                />

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
              </RequireContainer>
              <RequireContainer>
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
              </RequireContainer>
              <RequireContainer>
                <Label htmlFor="city">City</Label>
                <Field id="city" name="city" placeholder="Warsaw" type="text" />
                <FieldMessage
                  touched={touched}
                  errors={errors}
                  fieldName="city"
                />

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
              </RequireContainer>
              <RequireContainer>
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
                <Label htmlFor=""></Label>
                <Label htmlFor=""></Label>
              </RequireContainer>
              <Heading
                heading="physical details"
                headingPosition="none"
              ></Heading>
              <RequireContainer>
                <Label htmlFor="height">Height</Label>
                <Field
                  id="height"
                  name="height"
                  placeholder="1.93"
                  type="number"
                />
                <FieldMessage
                  touched={touched}
                  errors={errors}
                  fieldName="height"
                />
                <Label htmlFor="weight">Weight</Label>
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
              </RequireContainer>
              <RequireContainer>
                <Label htmlFor="chestWidth">Chest Width</Label>
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
                <Label htmlFor="waistWidth">Waist Width</Label>
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
              </RequireContainer>
              <RequireContainer>
                <Label htmlFor="hipWidth">Hip Width</Label>
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
              </RequireContainer>
              <Heading heading="your photo" headingPosition="none"></Heading>

              <RequireContainer>
                <Label>Face photo</Label>
                <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />

                <Label>silhouette photo</Label>
                <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
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
                <button onClick={submitForm} type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </FormApply>
    </FeatureSection>
  );
};

const FormApply = styled.div`
  font-weight: 600;
  width: 90%;
  margin: 0 auto;

  .agreement {
    margin: 2rem auto auto auto;
    font-weight: 400;
  }

  .headingSection {
    padding: 2rem 2rem 0 2rem;
  }

  .errorAnnouncement {
    color: var(--error-color);
  }

  .successAnnouncement {
    color: var(--success-color);
  }

  input {
    border: none;
    border-bottom: 2px solid var(--second-color);

    text-align: right;
    padding-right: 1rem;
    width: 150px;
    @media screen and (min-width: 564px) {
      width: 200px;
    }
  }

  input[type='checkbox'] {
    width: auto;
    margin: 1rem 1rem 1rem 0;
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

    @media screen and (min-width: 992px) {
      margin-top: 24px;
      padding: 12px 24px;
      font-size: 1.2rem;
    }
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  color: var(--black);
  padding: 0 1rem;
  width: 160px;
  @media screen and (min-width: 564px) {
    width: 200px;
  }
`;

const RequireContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
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
