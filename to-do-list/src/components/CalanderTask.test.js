import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CalendarTask from "./CalendarTask";

const todos = [
  { Title: "ateta", completed: false },
  { Title: "ateeeta", completed: true },
];

describe("CalendarTask Component", () => {
  test("should match snapshot without todos", () => {
    const { container } = render(<CalendarTask todos={[]} />);
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot with todos", () => {
    const { container } = render(<CalendarTask todos={todos} />);
    expect(container).toMatchSnapshot();
  });

  test("should list completed tasks", () => {
    render(<CalendarTask todos={todos} />);
    const li = screen.getAllByRole("listitem");
    expect(li.length).toBe(1);
  });

  test("should display a message if no task is completed", () => {
    render(<CalendarTask todos={[{ Title: "abc", completed: false }]} />);
    const li = screen.queryAllByRole("listitem");
    expect(li.length).toBe(0);
    const p = screen.getByText("Sorry there are no completed tasks");
    expect(p).toBeInTheDocument();
  });
});
