import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange: render checkout form
    render(<CheckoutForm />);
    
    // Act: find the header
    const header = screen.queryByText(/checkout form/i);
    
    // Assert: verify that header exists
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
    // Arrange: render checkout form
    render(<CheckoutForm />);

    // Act: fill out form and submit
    //  -Select first name input
    //  -Type first name into first name input
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, "Homer");

    //  -Select last name input
    //  -Type last name into last name input
    const lastNameInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameInput, "Simpson");

    //  -Select address input
    //  -Type address into address input
    const addressInput = screen.getByLabelText(/address/i);
    userEvent.type(addressInput, "742 Evergreen Terrace");

    //  -Select city input
    //  -Type city into city input
    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, "Springfield");

    //  -Select state input
    //  -Type state into state input
    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, "IL");

    //  -Select zip input
    //  -Type zip into zip input
    const zipInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipInput, "62702");

    // -Click submit
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert: success message renders to the screen after information is typed into checkout form inputs and submit button is clicked
    const success = screen.getByTestId("successMessage");
    expect(success).toBeInTheDocument();
});
