import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import Sentry and necessary integrations
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing"; // Use BrowserTracing for tracing

Sentry.init({
  dsn: "https://f53fec6ab7d96c6a64f6c482a6a54335@o4508057863127040.ingest.de.sentry.io/4508057866928208",
  integrations: [
    new BrowserTracing(), // Use BrowserTracing for tracing
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
