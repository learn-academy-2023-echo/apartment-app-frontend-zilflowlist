import { render, screen } from '@testing-library/react';
import ApartmentNew from '../pages/ApartmentNew'
import { BrowserRouter } from 'react-router-dom';

describe("<ApartmentNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <ApartmentNew />
        </BrowserRouter>
      )
    })
  
    it("renders the Apartment New page", () => {
      const element = screen.getByText("Add A New Listing")
      expect(element).toBeInTheDocument()
    })
  
    it("has a form with entries: street, Apartment Number/Unit, City, State, Square Footage, Price, Bedrooms, Bathroooms, Pets and an image", () => {
      const fStreet = screen.getByText("Street Name")
      expect(fStreet.getAttribute("for")).toEqual("street")
  
      const fUnit = screen.getByText("Apartment Number/Unit")
      expect(fUnit.getAttribute("for")).toEqual("unit")
  
      const fCity = screen.getByText("City")
      expect(fCity.getAttribute("for")).toEqual("city")
  
      const fState = screen.getByText("Select State")
      expect(fState.getAttribute("for")).toEqual("stateSelect")

      const fSquareFootage = screen.getByText("Square Footage")
      expect(fSquareFootage.getAttribute("for")).toEqual("squareFootage")

      const fPrice = screen.getByText("Price")
      expect(fPrice.getAttribute("for")).toEqual("price")

      const fBedrooms= screen.getByText("Select Bedrooms")
      expect(fBedrooms.getAttribute("for")).toEqual("bedrooms")

      const fBathrooms = screen.getByText("Select Bathrooms")
      expect(fBathrooms.getAttribute("for")).toEqual("bathrooms")

      const fImage = screen.getByText("Upload Apartment Images")
      expect(fImage.getAttribute("for")).toEqual("image")
    })
  })