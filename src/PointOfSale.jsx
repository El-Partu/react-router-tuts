import { IoCartOutline } from "react-icons/io5";
import Table from "./Table";
import SearchBar from "./SearchBar";
import TableFooter from "./TableFooter";
import { tableData, tableHead } from "./utils/dummyData";
import SideBarComponentNav from "./SideBarComponentNav";
function PointOfSale() {
  return (
    <div>
      <SideBarComponentNav
        buttonMessage="View Cart"
        buttonIcon={<IoCartOutline />}
        topic="Sales"
        message="Manage all sales here."
        showIcon="true"
      />
      <SearchBar />
      <Table tableHead={tableHead} tableData={tableData} />
      <TableFooter />
    </div>
  );
}

export default PointOfSale;
// "&#8964; Brush"
