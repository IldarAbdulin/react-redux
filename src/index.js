import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App";

import { cofigureStore } from "./store/index";
const store = cofigureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path=":filter" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>,
  rootElement
);
