import ComponentDesc from "./ComponentDesc";
import Graph from "./Graph";
import InfoCard from "./InfoCard";
function Dashboard() {
  return (
    <div className="dashboard">
      <ComponentDesc
        topic={"Hi Laurent Partu, welcome back"}
        message={" You are booming in sales today"}
      />
      <div className="dashboard-card">
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
      </div>
      {/* <div></div> */}
      <div className="dashboard-graph">
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
