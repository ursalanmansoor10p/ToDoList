import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactDOM } from "react";
import AddTodo from "./AddTodo";

test('Button renders', () => {
    render(<AddTodo/>)
   expect(screen.getByRole('button')).toBeEnabled;
})

test('Textbox is rendered', () => {
    render(<AddTodo/>)
    expect(screen.getByRole('textbox'));
})

