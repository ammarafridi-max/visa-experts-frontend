export default function PrimaryButton({ children, className, ...props }) {
  return (
    <button
      className={`box-border text-center text-white text-[14px] md:text-[16px] no-underline font-regular font-outfit py-2.5 px-5 rounded-full capitalize bg-accent-500 hover:bg-accent-600 border border-solid border-accent-500 cursor-pointer duration-300 shadow shadow-accent-600 disabled:bg-accent-500 disabled:opacity-60 disabled:cursor-auto disabled:hover:bg-accent-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
