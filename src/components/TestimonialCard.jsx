export default function TestimonialCard({
  title,
  name,
  src,
  children,
  purpose,
}) {
  return (
    <div className="min-w-80 w-full bg-primary-500 rounded-3xl relative py-7.5 px-7 font-outfit">
      <h3 className="text-lg text-left text-white font-normal">{title}</h3>
      <p className="text-left font-extralight text-md text-white my-5">
        {children}
      </p>
      <div>
        <p className="font-normal text-white">{name}</p>
        <p className="font-light text-[13px] leading-4 text-primary-100">
          {purpose}
        </p>
      </div>
    </div>
  );
}
