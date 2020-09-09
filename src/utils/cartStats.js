const cartStats = (cart = []) => {
  return cart.reduce(
    (prev, curr) => {
      const currBookPrice =
        curr.qty * (curr.book.rent[curr.plan] + curr.book.rent.deposit);
      const currBookRent = curr.qty * curr.book.rent[curr.plan];
      return {
        totalAmount: prev.totalAmount + currBookPrice,
        rentalAmount: prev.rentalAmount + currBookRent,
      };
    },
    { totalAmount: 0, rentalAmount: 0 }
  );
};

export default cartStats;
