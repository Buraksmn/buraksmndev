import { type ReactElement } from 'react';

import { Layout } from '@/components/layout';
import { ProfileBanner } from '@/ui/profile-banner';
import { TechIUse } from '@/ui/tech-i-use';

const Home = () => {
  return (
    <>
      <ProfileBanner />
      <TechIUse />
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
