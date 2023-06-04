import "./ProgressBar.css";

const ProgressBar = ({ stage }) => {
  const barParts = ["Cart", "Shipping", "Payment", "Confirmation"];

  return (
    <div className="progress-box">
      {barParts.map((barPart, index) => (
        <>
          <div key={barPart} className="stage-box">
            <div className={`p-Box ${stage >= index ? "active" : ""}`}>
              {barPart}
            </div>
          </div>
          {index !== barParts.length - 1 && (
            <div
              className={`p-Bar ${stage > index ? "active" : ""}`}
              key={index}
            ></div>
          )}
        </>
      ))}
    </div>
  );
};


export default ProgressBar;
