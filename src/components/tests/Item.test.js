import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { act } from "react-dom/test-utils";

import Item from "../Item";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const history = createMemoryHistory();

// testing data
const movie = {
    item: {
        title: 'Movie',
        release_date: '2018-01-01',
    }
};
const serie = {
    item: {
        name: 'Serie',
        first_air_date: '2019-02-02'
    },
    tv: true
};

//util functions
const renderWithRouter = (data) => (
    <Router history={history}>
        <Item {...data} />
    </Router>
)


it("Renders movie or serie with name and year (and label 'NEW')", () => {
  act(() => {
    render(
        renderWithRouter(movie), container);
  });
  expect(container.textContent).toBe("Movie2018");

  act(() => {
    render(renderWithRouter(serie), container);
  });
  expect(container.textContent).toBe("Serie2019NEW");
});