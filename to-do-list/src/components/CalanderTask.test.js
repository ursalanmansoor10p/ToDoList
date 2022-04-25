import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactDOM } from "react";
import AddTodo from "./AddTodo";
import CalendarTask from "./CalendarTask";

test('Check completed tasks', () => {
    render(<CalendarTask todos={[{Title:'ateta', completed: false},{Title:'ateeeta', completed: true}]} />)
   expect(screen.getByRole('listitem')).toBeChecked;
})