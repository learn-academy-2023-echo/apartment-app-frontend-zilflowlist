import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentIndex from "../pages/ApartmentIndex"
import mockApartments from "../mockApartments"

describe("<ApartmentIndex />", () => {
    it("renders without crashing", () => {
        
        render(
            <BrowserRouter>
                <ApartmentIndex apartments={mockApartments}/>
            </BrowserRouter>
        )
        screen.debug()
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(mockApartments.length)
   
    })
    it("renders apartment cards", () => {
        render(
            <BrowserRouter>
                <ApartmentIndex apartments={mockApartments} />
            </BrowserRouter>
        )
        mockApartments.forEach((apartment) => {
            const apartmentName = screen.getByText(/\$3,500\/month/i)
            expect(apartmentName).toBeInTheDocument()
        })
    })
})