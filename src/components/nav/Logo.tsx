const Logo = (): JSX.Element => {
  return (
    <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
      <a
        href="/"
        className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
      >
        React Shop
      </a>
    </h1>
  );
};

export default Logo;
