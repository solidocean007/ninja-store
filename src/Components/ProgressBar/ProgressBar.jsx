import "./ProgressBar.css";

const ProgressBar = () => {
  const barParts = ["Cart", "Shipping", "Payment", "Confirmation"];
  return (
    <div className="progress-box">
      {barParts.map((stage) => (
        <div key={stage} className="stage-box">
          <div className="p-Box">{stage}</div>
          {stage !== barParts[barParts.length -1] && <div className="p-Bar"></div> }
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
