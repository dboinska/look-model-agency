import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FeatureSectionMotion } from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import DragAndDrop from './DragAndDrop';
import { SignUpSchema } from './ValidationForm';
import Paragraph from './Paragraph';
import { useLocalStorageState } from '../hooks/localStorage';
import {
  StyledForm,
  Label,
  RequireContainer,
  FormGrid,
  FieldMessage,
  Checkbox,
} from './FormGrid';

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
    <FeatureSectionMotion direction="column">
      <Heading heading="Application Form">
        <H2>Let's fill in the form!</H2>
      </Heading>
      <StyledForm>
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
                <FormGrid>
                  <Label htmlFor="firstName">First Name</Label>
                  <Field id="firstName" name="firstName" placeholder="Jane" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="firstName"
                  />
                </FormGrid>
                <FormGrid>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Field id="lastName" name="lastName" placeholder="Doe" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="lastName"
                  />
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
                  <Label htmlFor=""></Label>
                  <Label htmlFor=""></Label>
                </FormGrid>
              </RequireContainer>
              <Heading
                heading="physical details"
                headingPosition="none"
              ></Heading>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>

              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>

                <FormGrid>
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
                </FormGrid>
              </RequireContainer>
              <RequireContainer>
                <FormGrid>
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
                </FormGrid>
                <FormGrid>
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
                </FormGrid>
              </RequireContainer>

              <Heading heading="your photo" headingPosition="none"></Heading>
              <RequireContainer>
                <FormGrid>
                  <Label width="200px">Face photo</Label>
                  <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
                </FormGrid>
                <FormGrid>
                  <Label width="200px">silhouette photo</Label>
                  <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
                </FormGrid>
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
      </StyledForm>
    </FeatureSectionMotion>
  );
};
