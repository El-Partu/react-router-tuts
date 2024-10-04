import { IoCartOutline } from "react-icons/io5";
import SideBarComponentNav from "./SideBarComponentNav";
import SearchBar from "./SearchBar";
import Table from "./Table";
import { categoryTableData, categoryTableHead } from "./utils/dummyData";
import TableFooter from "./TableFooter";
import InfoCard from "./InfoCard";

function Records() {
  return (
    <div>
      <SideBarComponentNav
        buttonMessage="View Cart"
        buttonIcon={<IoCartOutline size={25} />}
        topic="Records"
        message="Manage your records here."
        showIcon="false"
      />
      <div className="dashboard-card">
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
        <InfoCard message="$1200" topic="Today's revenue" />
      </div>
      <SearchBar />
      <Table tableHead={categoryTableHead} tableData={categoryTableData} />
      <TableFooter />
    </div>
  );
}

export default Records;
