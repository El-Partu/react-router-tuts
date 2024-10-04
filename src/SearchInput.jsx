import { IoSearchOutline } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
      <input type="text" placeholder="Search" className="input" />
      <IoSearchOutline className="search-icon" size={20} />
    </div>
  );
}

export default SearchInput;
