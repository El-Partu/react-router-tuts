import { IoCartOutline } from "react-icons/io5";
import SideBarComponentNav from "./SideBarComponentNav";
import SearchBar from "./SearchBar";
import Table from "./Table";
import TableFooter from "./TableFooter";
import { inventoryTableData, inventoryTableHead } from "./utils/dummyData";
import SelectDate from "./DatePicker";

function Inventory() {
  return (
    <div>
      <SideBarComponentNav
        buttonMessage="View Cart"
        buttonIcon={<IoCartOutline size={25} />}
        topic="Inventory"
        message="Manage product inventory here."
        showIcon="false"
      />
      <SelectDate />
      <SearchBar />
      <Table tableHead={inventoryTableHead} tableData={inventoryTableData} />
      <TableFooter />
    </div>
  );
}

export default Inventory;
