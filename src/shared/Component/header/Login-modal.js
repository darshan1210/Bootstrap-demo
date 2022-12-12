/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import './header.scss'

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="md" bg='dark' aria-labelledby="contained-modal-title-vcenter" centered >
      <div className='background'>
        <Modal.Header closeButton className='log_in_form' >
          <Modal.Title id="contained-modal-title-vcenter">
            Log-in form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='log_in_form'>

          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer className='log_in_form'>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}
