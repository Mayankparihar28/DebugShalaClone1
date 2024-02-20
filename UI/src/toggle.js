import React, { useState } from "react";
function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? "Hide Content" : "Show Content"}
      </button>
      {isToggled && (
        <div>
          {/* Content to be toggled goes here */}
          <p>This content is toggled on and off.</p>
        </div>
      )}
    </div>
  );
}

export default Toggle;
