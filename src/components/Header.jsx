const Header = ({ title }) => {
  return (
    <div className="bg-blue-800 text-white p-4 shadow-md">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
