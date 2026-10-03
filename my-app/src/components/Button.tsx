type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export function Button({ children, disabled }: ButtonProps) {
  return (
   <button 
      disabled={disabled} 
      className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 transition duration-300 ease-in-out disabled:bg-zinc-700">
      {children}
    </button>
  );
}
