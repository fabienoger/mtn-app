import React          from 'react';
import Menu           from '/imports/ui/components/Menu';

const MainLayout = ({main}) => (
  <div>
    <header>
      <Menu />
    </header>
    <main>
      {main}
    </main>
  </div>
);

export default MainLayout
