import TopHeader from './top-header';
import BottomHeader from './bottom-header';

import Search from '@/components/search/search';

const Header = () => {
  return (
    <header>
      <TopHeader />
      <Search />
      <BottomHeader />
    </header>
  );
};

export default Header;
