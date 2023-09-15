import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import { Button } from "reactstrap"
import './ApartmentShow.css'

const ApartmentShow = ({ apartments, current_user, deleteApartment }) => {
  let { id } = useParams()

  const selectedApartment = apartments?.find((apartment) => apartment.id === +id)
 
  return (
    <main className='show-container'>
      {selectedApartment && (
      <>
      <img
        alt="apt-pic"
        src={selectedApartment?.image} style={{width: "400px", height: "400px"}}/>
      <section className="apt-text">
      <h3>{selectedApartment?.street} {selectedApartment?.unit}</h3>
            <h5>
              {selectedApartment?.city},
              &nbsp; 
              {selectedApartment?.state}
            </h5>
            <h5>Square Footage: {selectedApartment?.square_footage}</h5>
            <h5>Bedrooms: {selectedApartment?.bedrooms}</h5>
            <h5>Bathrooms: {selectedApartment?.bathrooms}</h5>
            <h5>Pets: {selectedApartment?.pets}</h5>
          </section>
          </>
        )}
       {current_user && (
        <div className='show-buttons'>
      <NavLink to={`/apartmentedit/${selectedApartment?.id}`} className="nav-link">
        <Button className='btn1'>
          Edit Listing
        </Button>
      </NavLink>
      <NavLink to={"/apartmentindex"} className="nav-link">
        <Button onClick={() => deleteApartment(selectedApartment?.id)} className='btn2'>
          Delete Listing
        </Button>
      </NavLink>
      </div>
      )}
      </main>
  )
}

export default ApartmentShow