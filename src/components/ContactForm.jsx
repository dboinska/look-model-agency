import { Formik, Field, Form } from 'formik';

import { FeatureSectionMotion } from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import { useLocalStorageState } from '../hooks/localStorage';
import Paragraph from './Paragraph';

import { ContactSchema } from './ValidationContactForm';

import {
  StyledForm,
  Label,
  RequireContainer,
  FormGrid,
  FieldMessage,
  ButtonContainer,
} from './FormGrid';

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
      <StyledForm>
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
              <RequireContainer width="180px">
                <FormGrid>
                  <Label htmlFor="name">Name</Label>
                  <Field id="name" name="name" placeholder="Jane" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="name"
                  />
                </FormGrid>
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
                  <Label htmlFor="title">title</Label>
                  <Field id="title" name="title" placeholder="Title" />
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="title"
                  />
                </FormGrid>
                <FormGrid>
                  <Label htmlFor="message">message</Label>
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
                          rows="4"
                          cols="14"
                          placeholder="Message"
                          value={field.value}
                          onChange={field.onChange}
                        ></textarea>
                      );
                    }}
                  </Field>
                  <FieldMessage
                    touched={touched}
                    errors={errors}
                    fieldName="message"
                  />
                </FormGrid>
              </RequireContainer>
              <ButtonContainer>
                <button type="submit">Send</button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </StyledForm>
    </FeatureSectionMotion>
  );
};
