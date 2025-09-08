export default function PageTitle({ children, className }) {
  return (
    <h1
      className={`text-black text-[27px] md:text-[38px] capitalize font-semibold leading-8 md:leading-12 font-outfit ${className}`}
    >
      {children}
    </h1>
  );
}
