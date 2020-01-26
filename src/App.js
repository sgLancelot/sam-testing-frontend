import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, Container, Header} from 'semantic-ui-react'

// to do: edit POST Url to API Gateway

const FormExampleForm = ({
  name,
  contact,
  additional,
  handleNameChange,
  handleContactChange,
  handleAdditionalChange,
  handleAddGuest
}) => (
  <Form onSubmit={handleAddGuest}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' type='text' value={name} onChange={handleNameChange} />
    </Form.Field>
    <Form.Field>
      <label>Contact Number</label>
      <input placeholder='Contact Number' value={contact} onChange={handleContactChange} />
    </Form.Field>
    <Form.Field>
      <label>Additional guests</label>
      <input placeholder='Additional guests' value={additional} onChange={handleAdditionalChange} />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

const App = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [additional, setAdditional] = useState('')

  const handleAddGuest = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3001/Guests', {name, contact, additional})
      setName('')
      setContact('')
      setAdditional('')
      console.log('successfully added guest!')
    } catch(exception) {
      console.log('error adding guets!')
    }
  }

  return (
    <div>
      <b />
      <Header as='h2' content='Test Form' textAlign='center' />
      <Container>
        <FormExampleForm 
          name={name}
          contact={contact}
          additional={additional}
          handleNameChange={({target}) => setName(target.value)}
          handleContactChange={({target}) => setContact(target.value)}
          handleAdditionalChange={({target}) => setAdditional(target.value)}
          handleAddGuest={handleAddGuest} />
      </Container>
    </div>
  )
}

export default App
