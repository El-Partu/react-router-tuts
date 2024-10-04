import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { graghData } from "./utils/chartData";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Title,
  Legend
);

function Graph() {
  const options = {};

  return (
    <div className="graph">
      <Line options={options} data={graghData} />
    </div>
  );
}

export default Graph;
