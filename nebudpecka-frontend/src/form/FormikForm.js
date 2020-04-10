import React from 'react'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import FocusError from './FocusError'

export default ({ initialValues, children, ...rest }) =>
  <Formik initialValues={initialValues}
          initialStatus={{}}
          {...rest}
  >
    {
      ({ handleSubmit }) =>
        <Form noValidate onSubmit={handleSubmit}>
          {children}

          <FocusError/>
        </Form>
    }
  </Formik>