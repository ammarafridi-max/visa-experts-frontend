import PrimaryButton from './PrimaryButton';

export default function VisaCard({ name, description, src }) {
  return (
    <div className="min-w-[300px] min-h-[330px] md:min-w-0 md:w-[25%] md:h-[330px] bg-gray-200 rounded-3xl relative overflow-hidden cursor-pointer group">
      <div className="w-full h-full">
        <img src={src} className="w-full h-full object-cover" />
      </div>
      <div className="w-full min-h-[220px] flex flex-col justify-end absolute bottom-0 right-auto left-auto px-5 pb-5 font-outfit bg-linear-to-t from-black duration-300 group-hover:min-h-[280px]">
        <p className="text-[18px] text-white font-semibold">{name}</p>
        <p className="text-[14px] text-white font-extralight mb-3">
          {description}
        </p>
        <PrimaryButton className="py-2">Get More Info</PrimaryButton>
      </div>
    </div>
  );
}
