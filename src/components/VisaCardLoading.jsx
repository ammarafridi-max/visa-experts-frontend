export default function VisaCardLoading() {
  return (
    <div className="min-w-[300px] min-h-[330px] md:min-w-0 md:min-h-0 md:w-[100%] md:h-[330px] bg-gray-300 rounded-3xl relative overflow-hidden group animate-pulse">
      <div className="absolute inset-0 flex flex-col justify-end px-5 pb-5 font-outfit">
        <p className="h-8 w-[60%] bg-gray-400 rounded-sm">{name}</p>
        <p className="h-5 w-[100%] bg-gray-400 mt-3 rounded-sm"></p>
        <p className="h-5 w-[100%] bg-gray-400 mt-1 rounded-sm"></p>
        {/* <PrimaryLinkOutline size="small" to={`visas/${slug}`}>
          Read More
        </PrimaryLinkOutline> */}
      </div>
    </div>
  );
}
