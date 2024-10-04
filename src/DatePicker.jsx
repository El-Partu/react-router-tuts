import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SelectDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="date-picker">
      <DatePicker
        selected={selectedDate}
        onChange={(data) => setSelectedDate(data)}
        showYearDropdown={true}
      />
    </div>
  );
}

export default SelectDate;
