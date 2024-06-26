import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from './store';

import { getClaims } from '../../services/claims';

const Claims: FC = () => {
  const [loading, setLoading] = useState(false);

  // const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const load = async () => {
    setLoading(true);
    const claims = getClaims();
    // dispatch();
    setLoading(false);
  };

  return (
    <div className="container" data-title="Claims" style={{ width: '100%' }}>
      {loading ? 'Loading...' : null}

      <div>
        <button onClick={load}>Get Claims</button>
      </div>
    </div>
  );
};

export default Claims;
