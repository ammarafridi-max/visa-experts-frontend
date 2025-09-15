export default function SectionTitle({
  textAlign = 'left',
  children,
  subtitle,
  className,
  type = 'primary',
}) {
  let pClassName = `w-fit text-[12px] md:text-[14px] font-medium font-outfit uppercase py-1.5 px-4 rounded-lg text-left mb-2 ${textAlign === 'center' ? 'md:mx-auto' : 'md:ml-auto'}`;
  let h2ClassName = `text-[26px] md:text-[32px] font-medium font-outfit text-left leading-9 capitalize ${textAlign === 'center' ? 'md:text-center' : 'md:text-left'}`;

  if (type === 'secondary') {
    pClassName = pClassName + ' bg-primary-50 text-primary-500';
    h2ClassName = h2ClassName + ' text-white';
  } else {
    pClassName = pClassName + ' bg-primary-50 text-primary-500';
    h2ClassName = h2ClassName + ' text-black';
  }

  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      {subtitle && <p className={pClassName}>{subtitle}</p>}
      <h2 className={h2ClassName}>{children}</h2>
      {/* <div
        className={`flex pt-3 md:pt-6 gap-1.5 ${textAlign === 'center' ? 'justify-start md:justify-center' : 'md:justify-start'}`}
      >
        <span className="w-[120px] h-[4px] bg-primary-500 rounded-full"></span>
      </div> */}
    </div>
  );
}
