import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"
import aptLogo from '../assets/aptLogo.png'

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        let nav = screen.getByRole('img', {
            name: /apt home image/i
        })
        expect(nav).toHaveAttribute("src", "aptLogo.png")
        expect(nav).toHaveAttribute("alt", "apt home image")
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Login"))
        expect(screen.getByText("Login")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign Up"))
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
    })

})