import React from "react";
import Toast from "../utils/Toast";

const Home = (props) => {
  const [loginToastShow, setLoginToastShow] = React.useState(false);

  React.useEffect(() => {
    if (props?.location?.state?.loginError) {
      setLoginToastShow(true);
    }
  }, [props?.location?.state?.loginError]);
  return (
    <div>
      <h1>Home</h1>
      <Toast
        isVisible={loginToastShow}
        onClose={() => setLoginToastShow(false)}
        header="login Error"
        body="please login to continue"
      />
    </div>
  );
};

export default Home;
