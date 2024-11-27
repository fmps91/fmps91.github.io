import "./progress.css"

export default function ProgressBar({ value, max }) {
    console.log("value: ",value,"  max: ",max)
    return (
      <div className="progress-bar">
        <div className="progress-bar-completed" style={{ width: `${(value / max) * 100}%` }}>
        </div>
      </div>
    );
}