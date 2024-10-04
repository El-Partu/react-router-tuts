import { IoCartOutline } from "react-icons/io5";
import SideBarComponentNav from "./SideBarComponentNav";
import { inventoryTableData, inventoryTableHead } from "./utils/dummyData";
import SearchBar from "./SearchBar";
import TableFooter from "./TableFooter";
import Table from "./Table";

function Users() {
  return (
    <div>
      <SideBarComponentNav
        buttonMessage="View Cart"
        buttonIcon={<IoCartOutline size={25} />}
        topic="Users"
        message="Manage users here."
        showIcon={false}
      />
      <SearchBar />
      <Table tableHead={inventoryTableHead} tableData={inventoryTableData} />
      <TableFooter />
    </div>
  );
}

export default Users;
