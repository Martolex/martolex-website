export const plans = {
  MONTHLY: "oneMonth",
  QUATERLY: "threeMonth",
  SEMIANNUAL: "sixMonth",
  NINEMONTHS: "nineMonths",
  ANNUAL: "twelveMonths",
  SELL: "sellPrice",
};

export const returnStateSetters = {
  NOT_RETURNED: 0,
  RETURN_REQUESTED: 1,
  RETURNED: 2,
  NOT_ELIGIBLE: -1,
};

export const returnStates = {
  0: { message: "not returned", color: "dark" },
  1: { message: "Return Requested", color: "warning" },
  2: { message: "Returned", color: "success" },
  "-1": { message: "not elligible for returns", color: "dark" },
};
