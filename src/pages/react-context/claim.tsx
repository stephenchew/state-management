import { FC, useEffect, useState } from 'react';

import { getClaims } from '../../services/claims';
import { useAppContext } from './app-context';

const Claims: FC = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const state = useAppContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      state.setClaims(await getClaims());
      setLoading(false);
    })();
  }, [count]);

  return (
    <div className="container" data-title="Claims" style={{ width: '100%' }}>
      {loading ? 'Loading...' : null}
      {state.claims && (
        <ul>
          {state.claims.map((i) => (
            <li>
              <b>{i.title}</b>
              <br />
              <i style={{ fontSize: '0.7rem' }}>
                {i.date} | {i.number}
              </i>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setCount(count + 1)}>Get Claims</button>
    </div>
  );
};

export default Claims;
