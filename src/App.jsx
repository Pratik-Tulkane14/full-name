import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(false);

  const isValidName = (name) => /^[a-zA-Z\s]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidName(firstName) && isValidName(lastName)) {
      setIsFullNameVisible(true);
    } else {
      alert("Please enter a valid name with alphabetic characters only.");
    }
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
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {isFullNameVisible && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default App;
