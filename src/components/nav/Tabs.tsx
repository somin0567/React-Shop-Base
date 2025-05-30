import { MENUS } from "../../constants/category";

const Tabs = (): JSX.Element => {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <a
        className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        href="/fashion"
      >
        {MENUS.FASHION}
      </a>
      <a
        className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        href="/accessory"
      >
        {MENUS.ACCESSORY}
      </a>
      <a
        className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        href="/digital"
      >
        {MENUS.DIGITAL}
      </a>
    </div>
  );
};

export default Tabs;
