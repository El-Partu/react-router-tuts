import SearchBar from "./SearchBar";
import { tableData, tableHead } from "./utils/dummyData";
import TableFooter from "./TableFooter";
import { GoPlus } from "react-icons/go";
import SideBarComponentNav from "./SideBarComponentNav";
import Table from "./Table";
function Products() {
  return (
    <div>
      <SideBarComponentNav
        buttonMessage="Add Product"
        buttonIcon={<GoPlus size={25} />}
        topic="Products"
        message="Manage your products here."
        showIcon="true"
      />
      <SearchBar />
      <Table tableHead={tableHead} tableData={tableData} />
      <TableFooter />
    </div>
  );
}

export default Products;
