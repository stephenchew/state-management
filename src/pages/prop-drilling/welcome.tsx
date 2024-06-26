import { FC } from 'react';

type Props = {
  name: string;
};

const Welcome: FC<Props> = ({ name }) => {
  return (
    <div className="container" data-title="Welcome">
      {name ? `Welcome, ${name}` : 'Sign in'}
    </div>
  );
};

export default Welcome;
