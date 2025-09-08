export default function TestimonialCard({
  title,
  name,
  src,
  children,
  purpose,
}) {
  return (
    <div className="min-w-80 w-full bg-gray-100 rounded-lg relative py-7.5 px-7 font-outfit">
      <h3 className="text-lg text-left font-normal">{title}</h3>
      <p className="text-left font-extralight text-md my-5">{children}</p>
      <div>
        <p className="font-normal">{name}</p>
        <p className="font-light text-[13px] leading-4 text-gray-500">
          {purpose}
        </p>
      </div>
    </div>
  );
}
