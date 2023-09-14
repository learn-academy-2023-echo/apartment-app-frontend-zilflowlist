import React from 'react'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const ApartmentShow = ({ apartments, currentUser }) => {
  const { id } = useParams()

  let selectedApartment = apartments?.find((apartment) => apartment.id === +id)
  return (
  <main className="apartment-description">
    {selectedApartment && (
    <>
      <img
        alt="apt-pic"
        src={selectedApartment.image} />
      <h3> {selectedApartment.street} {selectedApartment.unit}</h3>
      <section className="apt-text">
            <h5>
              {selectedApartment.city}
              {selectedApartment.state}
            </h5>
            <h5>{selectedApartment.square_footage}</h5>
            <h5>Bedrooms: {selectedApartment.bedrooms}</h5>
            <h5>Bathrooms: {selectedApartment.bathrooms}</h5>
            <h5>Pets: {selectedApartment.pets}</h5>
          </section>
     </>
     )}
     {currentUser && (
      <NavLink to={`/apartmentedit/${selectedApartment.id}
        `} className="nav-link">
        <Button className='btn1'>
          Edit Listing
        </Button>
      </NavLink>
      <NavLink to="/apartmentindex">
        <Button className='btn2'>
          Delete Listing
        </Button>
      </NavLink>
     )}
    </main>
  )
}

export default ApartmentShow