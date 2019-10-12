import React, { useState, useEffect } from 'react';

export default function Footer(props) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch('/test')
      .then((result) => result.json())
      .then((result) => setTest(result.value));
  }, []);
  return <footer className="footer">{test}</footer>;
}
