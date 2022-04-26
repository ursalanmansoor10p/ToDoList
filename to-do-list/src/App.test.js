import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { onSnapshot } from "firebase/firestore";

const todos = [
  { title: "abc", completed: false },
  { title: "xyz", completed: true },
];
const docs = [
  { id: 1, data: () => todos[0] },
  { id: 2, data: () => todos[1] },
];

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  onSnapshot: jest.fn(),
  deleteDoc: jest.fn(),
}));
jest.mock("./firebase", () => ({
  db: jest.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    onSnapshot.mockImplementation((_, callback) => {
      callback(docs);
      return jest.fn();
    });
  });
  test("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("should fetch data from firebase on mount", () => {
    render(<App />);
    expect(onSnapshot).toBeCalled();
  });

  test("should display todos list by default", () => {
    render(<App />);
    const components = screen.getAllByTestId("todo-display");
    expect(components.length).toBe(todos.length);
    const addTodo = screen.getByTestId('add-todo');
    expect(addTodo).toBeInTheDocument();
  });

  test("should toggle between todos list and calendar task when clicking on the tabs", () => {
    render(<App />);
    const [leftTab, rightTab] = screen.getAllByRole("button");
    fireEvent.click(rightTab);
    const calendar = screen.getByTestId("calendar-tasks");
    expect(calendar).toBeInTheDocument();
    fireEvent.click(leftTab);
    const todoDisplay = screen.getAllByTestId("todo-display");
    expect(todoDisplay.length).toBe(todos.length);
  });
});
