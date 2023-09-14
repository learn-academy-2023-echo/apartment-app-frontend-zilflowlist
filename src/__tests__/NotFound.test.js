import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      const greeter = screen.getByText("Sorry Nobody's Home :(")
      expect(greeter).toBeInTheDocument()
    })
     
  });