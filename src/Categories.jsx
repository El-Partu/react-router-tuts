import SideBarComponentNav from "./SideBarComponentNav";
import SearchBar from "./SearchBar";
import { categoryTableData, categoryTableHead } from "./utils/dummyData";
import TableFooter from "./TableFooter";
import Table from "./Table";
import { IoCartOutline } from "react-icons/io5";

function Categories() {
  // const counter = useSelector((state) => state.counter);
  return (
    <div>
      {/* <h1>{counter}</h1> */}
      <SideBarComponentNav
        buttonMessage="View Cart"
        buttonIcon={<IoCartOutline size={25} />}
        topic="Categories"
        message="Manage your categories here."
        showIcon="true"
      />
      <SearchBar />
      <Table tableHead={categoryTableHead} tableData={categoryTableData} />
      <TableFooter />
    </div>
  );
}

export default Categories;
