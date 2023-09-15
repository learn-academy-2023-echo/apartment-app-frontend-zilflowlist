import {render, screen} from "@testing-library/react"
import SignIn from "../pages/SignIn"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


describe("<SignIn />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <SignIn />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/login/i)
        expect(indexLink).toBeInTheDocument()
    })
})