import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form, Container, Header, Select} from 'semantic-ui-react'

const rsvpOptions = [
  {text:'Yes'},
  {text:'No'}
]

const FormExampleForm = () => (
  <Form onSubmit={handleAddGuest}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Contact Number</label>
      <input placeholder='Contact Number' />
    </Form.Field>
    <Form.Field>
      <label>Additional guests</label>
      <input placeholder='Additional guests' />
    </Form.Field>
    <Form.Field>
      <label>Special Dietary Requirements</label>
      <input placeholder='Special Dietary Requirements' />
    </Form.Field>
    <Form.Select label='RSVP' options={rsvpOptions} placeholder='Yes/No' />
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
    <div>
      <b />
      <Header as='h2' content='Test Form' textAlign='center' />
      <Container>
        <FormExampleForm />
      </Container>
    </div>
  )
}

export default App
