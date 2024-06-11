

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }
  
  export default function BaseButton({ children, className, onClick }: ButtonProps) {
    return (
      <button
        className={`
          px-5 py-3 rounded-md tracking-wide bg-blue-700 hover:bg-blue-800 text-white 
          transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  