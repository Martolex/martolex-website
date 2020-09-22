import React from "react";
import Toast from "../utils/Toast";
import { Image } from "react-bootstrap";

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
      <Image src="https://s3.console.aws.amazon.com/s3/object/martolex-book-images/abcd?region=ap-south-1&tab=overview" />
    </div>
  );
};

export default Home;
