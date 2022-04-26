import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoDisplay from "./TodoDisplay";

const todo = { id: 1, title: "abc", completed: false };

describe("TodoDisplay Component", () => {
  test("should match snapshot", () => {
    const { container } = render(
      <TodoDisplay
        todo={todo}
        handleDelete={() => undefined}
        toggleComplete={() => undefined}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should call toggleComplete function when checkbox is toggled", () => {
    const toggleComplete = jest.fn();
    render(
      <TodoDisplay
        todo={todo}
        handleDelete={() => undefined}
        toggleComplete={toggleComplete}
      />
    );
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox.checked).toBe(todo.completed);
    fireEvent.click(checkbox);
    expect(toggleComplete).toBeCalledWith(todo);
  });

  test("should render the todo title with del if the todo is completed", () => {
    render(
      <TodoDisplay
        todo={{ ...todo, completed: true }}
        handleDelete={() => undefined}
        toggleComplete={() => undefined}
      />
    );

    const div = screen.getByTestId("todo-title");
    expect(div.childElementCount).toBe(1);
    expect(div.innerHTML).toContain(todo.title);
  });

  test("should render the todo title directly if the todo is not completed", () => {
    render(
      <TodoDisplay
        todo={todo}
        handleDelete={() => undefined}
        toggleComplete={() => undefined}
      />
    );

    const div = screen.getByTestId("todo-title");
    expect(div.childElementCount).toBe(0);
    expect(div.innerHTML).toBe(todo.title);
  });

  test("should call handleDelete function when delete button is clicked", () => {
    const handleDelete = jest.fn();
    render(
      <TodoDisplay
        todo={todo}
        handleDelete={handleDelete}
        toggleComplete={() => undefined}
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleDelete).toBeCalledWith(todo.id);
  });
});
