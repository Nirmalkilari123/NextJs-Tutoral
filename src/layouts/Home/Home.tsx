import React from 'react';

type HomeProps = {
  heading: string;
};

const Home: React.FC<HomeProps> = ({ heading }) => {
  return (
    <div>
      {heading}
    </div>
  );
};

export default Home;
