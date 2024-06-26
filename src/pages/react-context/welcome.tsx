import { FC } from 'react';
import { useAppContext } from './app-context';

const Welcome: FC = () => {
  const { name } = useAppContext();

  return (
    <div className="container" data-title="Welcome">
      {name ? `Welcome, ${name}` : 'Sign in'}
    </div>
  );
};

export default Welcome;
