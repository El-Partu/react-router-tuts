import { IoFilterOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import SearchInput from "./SearchInput";
import Button from "./Button";

function SearchBar() {
  return (
    <div className="point-sales-row-2">
      <div className="search">
        <SearchInput />
        <Button className="form-button point-btn1">
          <IoFilterOutline size={25} /> <span>Filter</span>
        </Button>
      </div>

      <Button className="form-button point-btn">
        <CgOptions size={25} />
        <span>View</span>
      </Button>
    </div>
  );
}

export default SearchBar;
