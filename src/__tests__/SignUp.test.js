import {render, screen} from "@testing-library/react"
import SignUp from "../pages/SignUp"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<SignUp />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <SignUp />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/sign up/i)
        expect(indexLink).toBeInTheDocument()
    })
})