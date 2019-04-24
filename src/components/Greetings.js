import React, { useState, useEffect } from "react";

export default function Greetings(props) {
  const [name, setName] = useState("Swanand");
  const [surname, setSurname] = useState("Nabar");

  useEffect(() => {
    document.title = name + " " + surname;
  });

  // to update the title. live
  // this replaces componentDidMount() and componentWillUpdate() lifecycle methods
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
      <div>value={width}</div>
    </div>
  );
}
