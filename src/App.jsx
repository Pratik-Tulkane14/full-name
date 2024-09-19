import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [isFullNameVisible, setIsFullNameVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFullNameVisible(true);
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Full Name Display</p>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>

      {isFullNameVisible && (
        <p>
          Full Name:{firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default App;
