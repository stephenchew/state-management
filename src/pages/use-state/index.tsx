import { FC, useState } from 'react';

const UseStatePage: FC = () => {
  const [name, setName] = useState('');

  return (
    <div className="container" data-title="Component">
      <div>Enter your name here</div>
      <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
      <h1>{name}</h1>
    </div>
  );
};

export default UseStatePage;
