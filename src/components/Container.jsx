export default function Container({ children, className }) {
  return (
    <div className={`w-[90%] md:w-[85%] lg:w-[85%] mx-auto ${className}`}>
      {children}
    </div>
  );
}
