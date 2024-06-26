import { FC } from 'react';
import Welcome from './welcome';

type Prop = {
  name: string;
};

const Header: FC<Prop> = ({ name }) => {
  return (
    <div
      className="container"
      data-title="Header"
      style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
    >
      <Welcome name={name} />
    </div>
  );
};

export default Header;
