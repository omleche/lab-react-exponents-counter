const ExponentFive = ({count}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">{count} * {count}* {count}* {count}* {count} = <span className="total">{Math.pow(5, count)}</span></p>

  </div>
);

export default ExponentFive;