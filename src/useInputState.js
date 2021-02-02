import { useState } from "react";

export default (initalVal) => {
  const [value, setValue] = useState(initalVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
