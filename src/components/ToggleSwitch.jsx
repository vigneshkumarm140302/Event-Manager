import { useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 
        ${enabled ? "bg-blue-500" : "bg-gray-400"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 
          ${enabled ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  );
};

export default ToggleSwitch;
