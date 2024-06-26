import { FC } from 'react';
import { useAppSelector } from './store';

const Welcome: FC = () => {
  const name = useAppSelector((state) => state.profile.name);

  return (
    <div className="container" data-title="Welcome">
      {name ? `Welcome, ${name}` : 'Sign in'}
    </div>
  );
};

export default Welcome;
