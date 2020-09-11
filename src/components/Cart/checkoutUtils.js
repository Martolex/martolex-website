import moment from "moment";

export const mapPlanToText = (plan) => {
  switch (plan) {
    case "oneMonth":
      return "1 Month Plan";
    case "threeMonth":
      return "3 Months Plan";
    case "sixMonth":
      return "6 Month Plan";
    case "nineMonth":
      return "9 Month Plan";
    case "twelveMonth":
      return "12 Month Plan";
    default:
      return "custom plan";
  }
};

export const getDeliveryCost = () => ({ forward: 70, return: 0 });

export const getDeliveryDate = () => {
  const minExpected = moment(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const maxExpected = moment(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

  if (
    minExpected.format("YYYY") != maxExpected.format("YYYY") ||
    minExpected.format("M") != maxExpected.format("M")
  ) {
    return (
      minExpected.format("Do-MMM-YYYY") +
      " to " +
      maxExpected.format("DD-MMM-YYYY")
    );
  } else {
    return `${minExpected.format("Do")} to ${maxExpected.format(
      "Do MMM YYYY"
    )}`;
  }
};
