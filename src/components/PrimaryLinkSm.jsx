import { Link } from 'react-router-dom';

export default function PrimaryLink({ children, ...props }) {
  return (
    <Link
      className="box-border text-center text-white text-[14px] no-underline font-semibold py-2.5 px-5 rounded-xl capitalize bg-accent-500 hover:bg-accent-600 border border-solid border-accent-500 cursor-pointer duration-300 disabled:bg-accent-500 disabled:opacity-60 disabled:cursor-auto disabled:hover:bg-accent-500"
      {...props}
    >
      {children}
    </Link>
  );
}
