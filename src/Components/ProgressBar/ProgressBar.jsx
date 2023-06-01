import "./ProgressBar.css";

const ProgressBar = ({ stage }) => {
  const barParts = ["Cart", "Shipping", "Payment", "Confirmation"];

  return (
    <div className="progress-box">
      {barParts.map((barPart, index) => (
        <div key={barPart} className="stage-box">
          <div className={`p-Box ${stage >= index ? "active" : ""}`}>
            {barPart}
          </div>
          {stage !== barParts[barParts.length - 1] && (
            <div
              className={`p-Bar ${stage >= index + 1 ? "active" : ""}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
