import { FC } from 'react';
import { useAppContext } from './app-context';

const UseStatePage: FC = () => {
  const { name, setName } = useAppContext();

  return (
    <div className="container" data-title="Profile">
      Name: <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
      {name && <span style={{ marginLeft: '1rem' }}>Hello {name}</span>}
    </div>
  );
};

export default UseStatePage;
