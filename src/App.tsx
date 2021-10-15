import React from "react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import "./App.css";
import { CalculatorPage } from "./pages";

Sentry.init({
  dsn: "https://c27f7ec6de4a4455966f33b76e2c0e09@o476264.ingest.sentry.io/6008625",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
  );
};

export default App;
