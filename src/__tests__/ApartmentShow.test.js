import { render, screen } from '@testing-library/react';
import ApartmentShow from '../pages/ApartmentShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockApartments from '../mockApts';

const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={mockApartments} />} />
        </Routes>
      </MemoryRouter>
    )
  }

  describe("<ApartmentShow />", () => {
    it("renders details of the apartments", () => {
      renderShow()
      screen.logTestingPlaygroundURL()
      let apartmentImage = screen.getByRole('img', {
        name: /apt home image/i
      })
      expect  
    })
  })