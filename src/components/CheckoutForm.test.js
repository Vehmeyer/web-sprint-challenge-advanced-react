import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
    // Arrange: render component
    render(<CheckoutForm />);
    
    // Act: find the header
    const header = screen.queryByText(/checkout form/i);
    
    // Assert: verify that header exists
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i);

test("form shows success message on submit with form details", () => {});
