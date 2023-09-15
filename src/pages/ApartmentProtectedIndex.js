import React from 'react'
import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, currentUser }) => {
  const myApartments = apartments.filter(apartment => currentUser?.id === apartment.user_id)
  console.log(apartments)
  return (
    <div className='apartments-container'>
      <h1> Recent Listings </h1>
      <div className='apartments-body'>
    {myApartments?.map((apartment, index) => {
      return(
        <Card key={index} className='apartment-card'>
          <CardImg top width='100%' src={apartment.image} alt='apt-img'/>
          <CardBody>
            <div className='apartment-content'>
          <CardTitle><b>${apartment.price}/month</b></CardTitle>
          <CardSubtitle>{apartment.street}</CardSubtitle>
          <CardSubtitle>{apartment.city}, {apartment.state}</CardSubtitle>
          <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, 
          Bath </CardSubtitle>
          </div>
          <NavLink to={`/apartmentshow/${apartment.id}`}>
             <Button className='index-button'>See more details</Button>
             <Button className='index-button'>Edit</Button>
              <Button className='index-button'>Delete</Button> 
          </NavLink>
          </CardBody>
        </Card>
      )
    })}
      </div>
    </div>
  )
}

export default ApartmentProtectedIndex