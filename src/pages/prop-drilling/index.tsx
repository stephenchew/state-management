import { FC, useState } from 'react';

import Header from './header';
import Profile from './profile';

const PropDrillingPage: FC = () => {
  const [name, setName] = useState('');

  return (
    <div
      className="container"
      data-title="Component"
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}
    >
      <Header name={name} />
      <Profile name={name} setName={setName} />
    </div>
  );
};

export default PropDrillingPage;
