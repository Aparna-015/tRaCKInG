type ButtonProps = {
 children: React.ReactNode;
};

export  function Button({ children }: ButtonProps) {
  return (
    <button className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 transition duration-300 ease-in-out">
      {children}
    </button>
  );
}
