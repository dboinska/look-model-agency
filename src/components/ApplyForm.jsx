import { Formik, Field, Form } from 'formik';
import FeatureSection from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import DragAndDrop from './DragAndDrop';
import { SignUpSchema } from './ValidationForm';

export const FormValidationSchema = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {};

  // const FileUploader = ({
  //   onFileSelect,
  //   onFileSelectSuccess,
  //   onFileSelectError,
  // }) => {
  //   const fileInput = useRef(null);

  //   const handleFileInput = e => {
  //     const file = e.target.files[0];

  //     if (file.size > 1048576)
  //       onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
  //     else onFileSelectSuccess(file);
  //   };

  //   return (
  //     <div className="file-uploader">
  //       <input
  //         type="file"
  //         id="image_uploads"
  //         name="image_uploads"
  //         accept=".jpg, .jpeg, .png"
  //         multiple
  //         onChange={handleFileInput}
  //       />

  //       <button
  //         onClick={e => fileInput.current && fileInput.current.click()}
  //         className="btn btn-primary"
  //       />
  //     </div>
  //   );
  // };

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
            postcode: '',
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
              <Heading heading="personal details"></Heading>

              <div>
                <label htmlFor="firstName">First Name</label>
                <div>
                  <Field id="firstName" name="firstName" placeholder="Jane" />
                  {errors.firstName && touched.firstName ? (
                    <div className="errorAnnouncement">{errors.firstName}</div>
                  ) : null}
                </div>
                <label htmlFor="lastName">Last Name</label>
                <div>
                  <Field id="lastName" name="lastName" placeholder="Doe" />
                  {errors.lastName && touched.lastName ? (
                    <div className="errorAnnouncement">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="birthDate">Birth Date</label>
                <Field
                  id="birthDate"
                  name="birthDate"
                  placeholder="01.01.2001"
                  type="date"
                />
                {errors.birthDate && touched.birthDate ? (
                  <div className="errorAnnouncement">{errors.birthDate}</div>
                ) : null}

                <label htmlFor="phoneNumber">Phone Number</label>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="507123098"
                  type="text"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="errorAnnouncement">{errors.phoneNumber}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="errorAnnouncement">{errors.email}</div>
                ) : null}

                <label htmlFor="address">Address</label>
                <Field
                  id="address"
                  name="address"
                  placeholder="Marszałkowska 3/12 "
                  type="text"
                />
                {errors.address && touched.address ? (
                  <div className="errorAnnouncement">{errors.address}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="city">City</label>
                <Field id="city" name="city" placeholder="Warsaw" type="text" />
                {errors.city && touched.city ? (
                  <div className="errorAnnouncement">{errors.city}</div>
                ) : null}
                <label htmlFor="postcode">Postcode</label>
                <Field
                  id="postcode"
                  name="postcode"
                  placeholder="00-123"
                  type="text"
                />
                {errors.postcode && touched.postcode ? (
                  <div className="errorAnnouncement">{errors.postcode}</div>
                ) : null}
              </div>
              <Heading heading="physical details"></Heading>
              <div>
                <label htmlFor="height">Height</label>
                <Field
                  id="height"
                  name="height"
                  placeholder="1.93"
                  type="number"
                />
                {errors.height && touched.height ? (
                  <div className="errorAnnouncement">{errors.height}</div>
                ) : null}
                <label htmlFor="weight">Weight</label>
                <Field
                  id="weight"
                  name="weight"
                  placeholder="60"
                  type="number"
                />
                {errors.weight && touched.weight ? (
                  <div className="errorAnnouncement">{errors.weight}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="chestWidth">Chest Width</label>
                <Field
                  id="chestWidth"
                  name="chestWidth"
                  placeholder="87"
                  type="number"
                />
                {errors.chestWidth && touched.chestWidth ? (
                  <div className="errorAnnouncement">{errors.chestWidth}</div>
                ) : null}
                <label htmlFor="waistWidth">Waist Width</label>
                <Field
                  id="waistWidth"
                  name="waistWidth"
                  placeholder="60"
                  type="number"
                />
                {errors.waistWidth && touched.waistWidth ? (
                  <div className="errorAnnouncement">{errors.waistWidth}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="hipWidth">Hip Width</label>
                <Field
                  id="hipWidth"
                  name="hipWidth"
                  placeholder="90"
                  type="number"
                />
                {errors.hipWidth && touched.hipWidth ? (
                  <div className="errorAnnouncement">{errors.hipWidth}</div>
                ) : null}
                <label htmlFor="shoeSize">shoe Size</label>
                <Field
                  id="shoeSize"
                  name="shoeSize"
                  placeholder="39"
                  type="number"
                />
                {errors.shoeSize && touched.shoeSize ? (
                  <div className="errorAnnouncement">{errors.shoeSize}</div>
                ) : null}
              </div>
              <Heading heading="your photo"></Heading>

              <div>
                <label>Face photo</label>
                <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />

                <label>silhouette photo</label>
                <DragAndDrop fileTypes={['JPG', 'PNG', 'GIF']} maxSize={1} />
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
  label {
    text-transform: uppercase;
    color: var(--black);
    padding-right: 2rem;
    width: 200px;
    text-align: right;
  }

  .headingSection {
    padding: 2rem 0;
  }
  input {
    border: none;
    border-bottom: 2px solid var(--second-color);
    width: 220px;
    text-align: right;
    padding-right: 1rem;

    &[type='file'] {
      width: 300px;
    }
  }

  .errorAnnouncement {
    color: var(--error-color);
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

  div {
    display: flex;
    justify-content: space-between;
  }
`;
