import React from "react";

interface DropDownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  results: { id: number; title: string }[];
  onSelect: (id: number) => void;
  visible: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  value,
  onChange,
  results,
  onSelect,
  visible,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="검색"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {visible && results.length > 0 && (
        <ul className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600">
          {results.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="text-left js-searchedItem"
                onClick={() => onSelect(item.id)}
              >
                <span className="text-gray-600 dark:text-white line-clamp-2">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
