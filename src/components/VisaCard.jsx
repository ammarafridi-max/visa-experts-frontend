import PrimaryButtonOutline from './PrimaryButtonOutline';

export default function VisaCard({ name, description, src }) {
  return (
    <div className="min-w-[300px] min-h-[330px] md:min-w-0 md:min-h-0 md:w-[100%] md:h-[330px] bg-gray-200 rounded-3xl relative overflow-hidden cursor-pointer group">
      <img
        src={src}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-end px-5 pb-5 font-outfit bg-gradient-to-t from-black/100 to-transparent duration-300">
        <p className="text-[18px] text-white font-semibold">{name}</p>
        <p className="text-[14px] text-white font-extralight mb-3">
          {description}
        </p>
        <PrimaryButtonOutline size="small">Get More Info</PrimaryButtonOutline>
      </div>
    </div>
  );
}
