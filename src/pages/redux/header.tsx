import { FC } from 'react';
import Welcome from './welcome';

const Header: FC = () => {
  return (
    <div
      className="container"
      data-title="Header"
      style={{ display: 'flex', justifyContent: 'flex-end', width: '97%' }}
    >
      <Welcome />
    </div>
  );
};

export default Header;
