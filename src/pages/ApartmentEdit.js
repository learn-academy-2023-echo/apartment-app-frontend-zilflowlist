import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import './ApartmentNew.css'

const ApartmentEdit = ({editApartment, current_user, apartments}) => {

  const navigate = useNavigate()
  let {id} = useParams()

  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: current_user.id
  })
  

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.street]: e.target.value })
  }

  const handleSubmit = () => {
    createApartment(newApartment)
    navigate("/apartmentindex")
  }

  return (
    <div className='containerAll'>
      <Form className='form'>
      <div className='container2'>
        <div className='containerHead'>
          <div className='heading'>
          <h2>Add A New Listing</h2>
          </div>
          </div>
          <div className='form-content'>
            <FormGroup>
              <Label for="street">
                Street Name:
              </Label>
              <Input id="street" name="street" placeholder="Enter a street" type="text" onChange={handleChange} value={newApartment.street} />
            </FormGroup>  

            <FormGroup>
              <Label for="unit">Apartment Number/Unit:</Label>
              <Input id="unit" name="unit" placeholder="Enter Apartment Number/Unit" type="text" onChange={handleChange} value={newApartment.unit} />
            </FormGroup> 

            <FormGroup>
              <Label for="city">City:</Label>
              <Input id="city" name="city" placeholder="Enter City" type="text" onChange={handleChange} value={newApartment.city} />
            </FormGroup> 

            <FormGroup>
              <Label for="state">Select State:</Label>
              <Input id="state" name="state" type="text" placeholder='Enter State' onChange={handleChange} value={newApartment.state} />
            </FormGroup>
              
            <FormGroup>
              <Label for="square_footage">Square Footage:</Label>
              <Input id="square_footage" name="squareFootage" type="number"  placeholder="Enter Square Footage" onChange={handleChange} value={newApartment.squareFootage} />
            </FormGroup>  

            <FormGroup>
              <Label for="price">Price:</Label>
              <Input id="price" name="price" type="text"  placeholder="Enter Price" onChange={handleChange} value={newApartment.price} />
            </FormGroup> 

            <FormGroup>
            <Label for="bedrooms">Select Bedrooms:</Label>
            <Input id="bedrooms" name="bedrooms" type="number" placeholder='Enter number of bedrooms' onChange={handleChange} value={newApartment.bedrooms} />
            </FormGroup>

            <FormGroup>
              <Label for="bathrooms">Select Bathrooms:</Label>
              <Input id="bathrooms" name="bathrooms" type="number" placeholder='Enter number of bathrooms' onChange={handleChange} value={newApartment.bathrooms} />
            </FormGroup>

            <FormGroup>
              <Label for="pets">Pets Are Allowed:</Label>
              <Input id="pets" name="pets" placeholder='Enter yes or no' type="text"/>
            </FormGroup>

            <FormGroup>
              <Label for="image">
                Upload Apartment Images:
              </Label>
              <Input id="image" name="image" placeholder='Upload an image' type="text" />
            </FormGroup>
            
            <div className='button'>
              <Button onClick={handleSubmit} name="submit" className='add-button'>Create Listing</Button>
            </div>

        </div>
      </div>
      </Form>
    </div>
      )
}             
            

export default ApartmentEdit