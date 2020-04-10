import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup'
import { register } from '../api'
import { FieldGroup, FormikForm } from '../form'

const mapServerErrorCodeToLabel = (field, code) => {
  if (field === 'email' && code === 'duplicate') {
    return 'Tato emailová adresa je již zaregistrována'
  }
  return code
}

export default () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Registrace
        </Card.Title>

        <FormikForm
          initialValues={{ email: '', password: '', name: '' }}
          validationSchema={
            Yup.object({
              email: Yup.string()
                .email()
                .required(),
              password: Yup.string()
                .min(8)
                .required(),
              name: Yup.string()
                .required()
            })
          }
          onSubmit={register}
          mapServerErrorCodeToLabel={mapServerErrorCodeToLabel}
        >
          <FieldGroup as={Form.Control} name="email" label="Email" sm={[2, 9]}
                      isValid={false} autoFocus autoComplete="username"/>
          <FieldGroup as={Form.Control} name="password" label="Heslo" sm={[2, 9]}
                      type="password" autoComplete="current-password"/>
          <FieldGroup as={Form.Control} name="name" label="Jméno" sm={[2, 9]}/>

          <Form.Group as={Row}>
            <Col sm={{ offset: 2 }}>
              <Button type="submit">Zaregistrovat se</Button>
            </Col>
          </Form.Group>
        </FormikForm>
      </Card.Body>
    </Card>
  )
}
