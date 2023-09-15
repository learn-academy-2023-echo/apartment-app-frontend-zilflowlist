import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import './ApartmentNew.css'

const ApartmentNew = () => {

  const navigate = useNavigate()
  const [newApartment, setNewApartment] = useState({
  })

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.street]: e.target.value })
  }

  return (
    <div className='containerAll'>
      <form>
      <div className='container2'>
        <div className='containerHead'>
          <h2>Add A New Listing</h2>
            <FormGroup>
              <Label for="street">
                Street Name
              </Label>
              <Input id="streetName" name="street" placeholder="Enter a street" type="text" onChange={handleChange} value={newApartment.streetName} />
            </FormGroup>  

            <FormGroup>
              <Label for="unit">Apartment Number/Unit</Label>
              <Input id="unit" name="email" placeholder="Enter Apartment Number/Unit" type="text" onChange={handleChange} value={newApartment.unit} />
            </FormGroup> 

            <FormGroup>
              <Label for="city">City</Label>
              <Input id="city" name="city" placeholder="Enter City" type="text" onChange={handleChange} value={newApartment.city} />
            </FormGroup> 

            <FormGroup>
              <Label for="stateSelect">Select State</Label>
              <Input id="stateSelect" name="stateSelect" type="select" onChange={handleChange} value={newApartment.state}>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>CA</option>
                <option>CO</option>
                <option>CN</option>
              </Input>
            </FormGroup>
              
            <FormGroup>
              <Label for="squareFootage">Square Footage</Label>
              <Input id="squareFootage" type="number" name="squareFootage" placeholder="Enter Square Footage" onChange={handleChange} value={newApartment.squareFootage} />
            </FormGroup>  

            <FormGroup>
              <Label for="price">Price</Label>
              <Input id="price" type="text" name="price" placeholder="Enter Price" onChange={handleChange} value={newApartment.price} />
            </FormGroup> 

            <FormGroup>
            <Label for="bedrooms">Select Bedrooms</Label>
            <Input id="bedroomSelect" name="bedroomSelect" type="select" onChange={handleChange} value={newApartment.bedrooms}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="bathrooms">Select Bathrooms</Label>
              <Input id="bathroomSelect" name="bathroomSelect" type="select" onChange={handleChange} value={newApartment.bathrooms}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </Input>
            </FormGroup>
            <br></br>

            <FormGroup check>
              <Input name="radioPets" type="radio"/>
              {' '}
              <Label check>Pets Are Allowed</Label>
            </FormGroup>

            <FormGroup check>
              <Input name="radioPets" type="radio"/>
              {' '}
              <Label check>Pets are Not allowed</Label>
            </FormGroup>
            <br></br>

            <FormGroup>
              <Label for="image">
                Upload Apartment Images
              </Label>
              <Input id="image" name="image" type="file" />
            </FormGroup>
        </div>
      </div>
      </form>
    </div>
      )
}             
            

            


export default ApartmentNew