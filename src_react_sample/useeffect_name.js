import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${name}`; 
    // document.getElementById('ex1') = `Greetings to ${name}`; 
  }, [name]);

  return <div>{message}</div>;
}

export default Greet;