const Rs = ({ children }) => {
  if (children > 0) {
    return (
      <span>
        {children.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 0,
        })}
      </span>
    );
  }
};

export {
    Rs
}