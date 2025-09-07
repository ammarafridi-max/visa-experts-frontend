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
          className={`text-[14px] md:text-[16px] font-medium font-outfit uppercase text-primary-500 text-left  ${textAlign === 'center' ? 'md:text-center' : 'md:text-left'}`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-[28px] md:text-[36px] text-black font-medium font-outfit text-left leading-9 ${textAlign === 'center' ? 'md:text-center' : 'md:text-left'}`}
      >
        {children}
      </h2>
    </div>
  );
}
