export const backendApi =
  process.env.REACT_BACKEND_URL ||
  (process.env.NODE_ENV == "development"
    ? "http://localhost:3000/"
    : "https://backend.martolex.com/");

export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || null;
