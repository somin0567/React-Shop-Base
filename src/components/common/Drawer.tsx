import { MENUS } from "../../constants/category";

const Drawer = (): JSX.Element => {

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/fashion">{MENUS.FASHION}</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/accessory">{MENUS.ACCESSORY}</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/digital">{MENUS.DIGITAL}</a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
