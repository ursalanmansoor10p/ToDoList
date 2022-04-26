import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddTodo from "./AddTodo";
import { addDoc } from "firebase/firestore";

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
}));
jest.mock("../firebase", () => ({
  db: jest.fn(),
}));

describe("AddTodo Component", () => {
  test("should match snapshot", () => {
    const { container } = render(<AddTodo />);
    expect(container).toMatchSnapshot();
  });

  test("Button is rendered", () => {
    render(<AddTodo />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Textbox is rendered", () => {
    render(<AddTodo />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("should add document in firebase on submit", async () => {
    render(<AddTodo />);
    const textBox = screen.getByRole("textbox");
    fireEvent.input(textBox, { target: { value: "abc" } });
    expect(textBox.value).toBe("abc");
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(addDoc).toBeCalled();
    await waitFor(() => expect(textBox.value).toBe(""));
  });
});
