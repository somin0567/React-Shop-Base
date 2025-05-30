import SideMenu from "./SideMenu";
import Logo from "./Logo";
import Tabs from "./Tabs";
import Cart from "./Cart";
import Search from "../common/Search";
import DarkMode from "../common/DarkMode";

const Nav = (): JSX.Element => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <SideMenu />
        <Logo />
        <Tabs />
        <DarkMode />
        <Search />
        <Cart />
      </div>
    </div>
  );
};

export default Nav;
