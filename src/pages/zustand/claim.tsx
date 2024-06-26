import { FC, useState } from 'react';

import { getClaims } from '../../services/claims';

const Claims: FC = () => {
  const [loading, setLoading] = useState(false);
  // const state = useClaimStore();

  const load = async () => {
    setLoading(true);
    const claims = await getClaims();
    // state.setInsurances(insurances);
    setLoading(false);
  };

  return (
    <div className="container" data-title="Insurances" style={{ width: '100%' }}>
      {loading ? 'Loading...' : null}

      <div>
        <button onClick={load}>Get Claims</button>
      </div>
    </div>
  );
};

export default Claims;
