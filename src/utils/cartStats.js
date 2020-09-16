import { plans } from "./enums";

const cartStats = (cart = []) => {
  return cart.reduce(
    (prev, curr) => {
      const currBookPrice = curr.qty * itemPrice(curr);
      const currBookRent = curr.qty * curr.book.rent[curr.plan];
      return {
        totalAmount: prev.totalAmount + currBookPrice,
        rentalAmount: prev.rentalAmount + currBookRent,
        totalMrp: prev.totalMrp + curr.qty * curr.book.rent.mrp,
      };
    },
    { totalAmount: 0, rentalAmount: 0, totalMrp: 0 }
  );
};

export const itemPrice = (item) =>
  item.plan == plans.SELL
    ? item.book.rent[item.plan]
    : item.book.rent[item.plan] + item.book.rent.deposit;

export default cartStats;
