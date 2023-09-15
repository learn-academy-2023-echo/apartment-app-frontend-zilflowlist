import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import './ApartmentNew.css'

const ApartmentEdit = ({ updateApartment, current_user, apartments }) => {

  const navigate = useNavigate()
  let {id} = useParams()

  const currentApartment = apartments?.find((apartment) => apartment.id === +id)

  const [editApartment, setEditApartment] = useState({
    street: currentApartment.street,
    unit: currentApartment.unit,
    city: currentApartment.city,
    state: currentApartment.state,
    square_footage: currentApartment.square_footage,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms,
    pets: currentApartment.pets,
    image: currentApartment.image,
    user_id: current_user.id
  })
  

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id)
    navigate("/myapartments")
  }

  return (
    <div className='containerAll'>
      <Form className='form'>
      <div className='container2'>
        <div className='containerHead'>
          <div className='heading'>
          <h2>Update Listing</h2>
          </div>
          </div>
          <div className='form-content'>
            <FormGroup>
              <Label for="street">
                Street Name:
              </Label>
              <Input id="street" name="street" placeholder="Enter a street" type="text" onChange={handleChange} value={editApartment.street} />
            </FormGroup>  

            <FormGroup>
              <Label for="unit">Apartment Number/Unit:</Label>
              <Input id="unit" name="unit" placeholder="Enter Apartment Number/Unit" type="text" onChange={handleChange} value={editApartment.unit} />
            </FormGroup> 

            <FormGroup>
              <Label for="city">City:</Label>
              <Input id="city" name="city" placeholder="Enter City" type="text" onChange={handleChange} value={editApartment.city} />
            </FormGroup> 

            <FormGroup>
              <Label for="state">Select State:</Label>
              <Input id="state" name="state" type="text" placeholder='Enter State' onChange={handleChange} value={editApartment.state} />
            </FormGroup>
              
            <FormGroup>
              <Label for="square_footage">Square Footage:</Label>
              <Input id="square_footage" name="squareFootage" type="number"  placeholder="Enter Square Footage" onChange={handleChange} value={editApartment.squareFootage} />
            </FormGroup>  

            <FormGroup>
              <Label for="price">Price:</Label>
              <Input id="price" name="price" type="text"  placeholder="Enter Price" onChange={handleChange} value={editApartment.price} />
            </FormGroup> 

            <FormGroup>
            <Label for="bedrooms">Select Bedrooms:</Label>
            <Input id="bedrooms" name="bedrooms" type="number" placeholder='Enter number of bedrooms' onChange={handleChange} value={editApartment.bedrooms} />
            </FormGroup>

            <FormGroup>
              <Label for="bathrooms">Select Bathrooms:</Label>
              <Input id="bathrooms" name="bathrooms" type="number" placeholder='Enter number of bathrooms' onChange={handleChange} value={editApartment.bathrooms} />
            </FormGroup>

            <FormGroup>
              <Label for="pets">Pets Are Allowed:</Label>
              <Input id="pets" name="pets" placeholder='Enter yes or no' type="text" onChange={handleChange} value={editApartment.pets}/>
            </FormGroup>

            <FormGroup>
              <Label for="image">
                Upload Apartment Images:
              </Label>
              <Input id="image" name="image" placeholder='Upload an image' type="text" onChange={handleChange} value={editApartment.image}/>
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
