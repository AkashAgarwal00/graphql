import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import { AmplifyProvider } from "@aws-amplify/ui-react";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);
