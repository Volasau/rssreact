import { useState } from 'react';
import './btnTest.css';

function ErrorButton() {
  const [hasError, sethasError] = useState(false);

  const handleButtonClick = () => {
    sethasError(true);
  };

  if (hasError) {
    throw new Error('I crashed!');
  }

  return (
    <div className="error__test">
      <button onClick={handleButtonClick} className="error__btn">
        ERROR
      </button>
    </div>
  );
}

export default ErrorButton;
