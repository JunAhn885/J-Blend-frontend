import { useState } from "react";

// changes the boolean value from true to false
export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue(!value);
  }

  return { value, toggleValue };
}
