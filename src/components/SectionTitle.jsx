export default function SectionTitle({
  textAlign = 'left',
  children,
  subtitle,
  className,
  mb = '8',
}) {
  return (
    <div className={`mb-10 md:mb-15 ${className}`}>
      {subtitle && (
        <p
          className={`w-fit text-[14px] md:text-[14px] font-medium font-outfit uppercase bg-primary-50 py-1.5 px-4 rounded-lg text-primary-500 text-left mb-2  ${textAlign === 'center' ? 'md:mx-auto' : 'md:ml-auto'}`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-[28px] md:text-[36px] text-black font-normal font-outfit text-left leading-8 capitalize text-shadow-accent-200 ${textAlign === 'center' ? 'md:text-center' : 'md:text-left'}`}
      >
        {children}
      </h2>
      {/* <div
        className={`flex pt-3 md:pt-6 gap-1.5 ${textAlign === 'center' ? 'justify-start md:justify-center' : 'md:justify-start'}`}
      >
        <span className="w-[120px] h-[4px] bg-primary-500 rounded-full"></span>
      </div> */}
    </div>
  );
}
