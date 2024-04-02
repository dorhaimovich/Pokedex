interface IconButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => (
  <button
    className="inline-flex items-center bg-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 disabled:opacity-50 px-2 py-2 border border-transparent rounded-lg font-semibold text-blue-800 text-sm dark:text-blue-400 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default IconButton;
