import { render, screen } from '@testing-library/react';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { BrowserRouter } from 'react-router-dom';

describe("<ApartmentProtectedIndex />", () => {
    beforeEach(() => {
        const currentUser = {
            email: "test1@example.com",
            password: "password",
            id: 1
        }
        const user1Apartments = [
            {
                id: 1,
                street: "Test Lane",
                unit: "7",
                city: "San Deegleby",
                state: "CA",
                square_footage: 800,
                price: "3,500",
                bedrooms: 2,
                bathrooms: 1.5,
                pets: "yes",
                image: "https://plus.unsplash.com/premium_photo-1672252617539-878656f17efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                user_id: 1
            }
        ]
        render(
            <BrowserRouter>
                <ApartmentProtectedIndex currentUser={currentUser} apartments={user1Apartments}/>
            </BrowserRouter>
        )
    })
    it("renders without crashing", () => {
        const greeting = screen.getByText("Recent Listings")
        expect(greeting).toBeInTheDocument()
    })
})