import React from "react";
import ReactDOMClient from "react-dom/client";
import { UniqueleverageCom } from "./screens/UniqueleverageCom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <UniqueleverageCom />
  </LocalizationProvider>
);
