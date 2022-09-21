import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedDate, IntlProvider } from "react-intl";

function App() {
  return (
    <IntlProvider locale="ja">
      <div className="App">
        <header className="App-header">
          <FormattedDate value={new Date()}>
            {(value: string) => <strong>{value}</strong>}
          </FormattedDate>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
