export const backendApi =
  process.env.REACT_BACKEND_URL ||
  (process.env.NODE_ENV == "development"
    ? "http:localhost:3001"
    : "http://martolexbackend-env.eba-8mtjabh4.ap-south-1.elasticbeanstalk.com/");
