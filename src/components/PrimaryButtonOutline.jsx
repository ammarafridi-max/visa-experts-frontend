export default function PrimaryButtonOutline({
  children,
  className = '',
  size = 'medium',
  ...props
}) {
  if (size === 'large') {
    return (
      <button
        className={`text-center text-accent-100 text-[15px] md:text-[18px] no-underline font-medium font-outfit py-3 px-5 rounded-full capitalize border-2 border-solid border-accent-500 bg-transparent hover:bg-accent-600 hover:text-white hover:border-accent-600 cursor-pointer duration-300 shadow disabled:bg-accent-600 disabled:text-white disabled:opacity-50 disabled:cursor-auto ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  } else if (size === 'small') {
    return (
      <button
        className={`text-center text-accent-100 text-[12px] md:text-[13px] no-underline font-medium font-outfit py-2 px-4 rounded-full capitalize border-2 border-solid border-accent-500 bg-transparent hover:bg-accent-600 hover:text-white hover:border-accent-600 cursor-pointer duration-300 shadow disabled:bg-accent-600 disabled:text-white disabled:opacity-50 disabled:cursor-auto ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={`text-center text-accent-100 text-[14px] md:text-[16px] no-underline font-medium font-outfit py-2.5 px-5 rounded-full capitalize border-2 border-solid border-accent-500 bg-transparent hover:bg-accent-600 hover:text-white hover:border-accent-600 cursor-pointer duration-300 shadow disabled:bg-accent-600 disabled:text-white disabled:opacity-50 disabled:cursor-auto ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}
