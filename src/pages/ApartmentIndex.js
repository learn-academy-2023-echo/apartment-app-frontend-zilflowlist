import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, Button, CardImg} from 'reactstrap'
import { NavLink } from 'react-router-dom'
const ApartmentIndex = ({apartments}) => {
  return (
    <div className='apartments-container'>
      <h1> Recent Listings </h1>
      <div className='apartments-body'>
    {apartments?.map((apartment, index) => {
      return(
        <Card key={index} className='apartment-card'>
          <CardImg top width='100%' src={apartment.image} alt='apt-img'/>
          <CardBody>
          <CardTitle><b>${apartment.price}/month</b></CardTitle>
          <CardSubtitle>{apartment.street}</CardSubtitle>
          <CardSubtitle>{apartment.city}, {apartment.state}</CardSubtitle>
          <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, 
          Bath </CardSubtitle>
          <NavLink to={`/apartmentshow/${apartment.id}`}> <Button className='index-button'>See more details </Button> 
          </NavLink>
          </CardBody>
        </Card>
      )
    })}
      </div>
    </div>
  )
}

export default ApartmentIndex