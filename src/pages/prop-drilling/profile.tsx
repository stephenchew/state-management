import { FC } from 'react';

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const UseStatePage: FC<Props> = ({ name, setName }) => {
  return (
    <div className="container" data-title="Profile">
      <div>Enter your name here</div>
      <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
      <h1>{name}</h1>
    </div>
  );
};

export default UseStatePage;
