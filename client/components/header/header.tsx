import TopHeader from './top-header';
import BottomHeader from './bottom-header';

import Search from '@components/search/search';

const Header = () => {
  return (
    <header className=" ">
      <TopHeader />
      <Search />
      <BottomHeader />
    </header>
  );
};

export default Header;
