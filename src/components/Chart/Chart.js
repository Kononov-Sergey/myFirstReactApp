import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const arrayOfValue = props.dataPoints.map((el) => {
    return el.value;
  });
  const maximum = Math.max(...arrayOfValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={maximum}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
