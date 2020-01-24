import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form onSubmit={handleAddGuest}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>RSVP</label>
      <input placeholder='RSVP' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

const handleAddGuest = async (event) => {
  event.preventDefault()
  try {
    await axios.post('/guests', {"id": 1, "body": "some name"})
    console.log('successfully added guest!')
  } catch(exception) {
    console.log('error adding guets!')
  }
}

const App = () => {
  return (
    <FormExampleForm />
  )
}

export default App
