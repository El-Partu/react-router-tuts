import { useState } from "react";
import Button from "./Button";

function TableFooter() {
  const [counter, setCounter] = useState(1);
  function increment() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }
  function decrement() {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  }
  return (
    <div className="point-of-sales-footer">
      <div>
        <Button
          className="form-button point-btn point-btn-footer"
          onClick={() => increment()}
        >
          Previous
        </Button>
        <Button
          className="form-button point-btn point-btn-footer1"
          onClick={() => decrement()}
        >
          Next
        </Button>
      </div>
      <p>Page {counter} of 10</p>
    </div>
  );
}

export default TableFooter;
