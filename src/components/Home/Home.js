import React from "react";
import Toast from "../utils/Toast";

const Home = (props) => {
  const [loginToastShow, setLoginToastShow] = React.useState(
    props?.location?.state?.loginError
  );

  React.useEffect(() => {
    if (props?.location?.state?.loginError) {
      console.log("abcd");
      setLoginToastShow(true);
    }
  }, [props?.location?.state?.loginError]);
  console.log(loginToastShow);
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
