import { FaCheck, FaXmark } from 'react-icons/fa6';
import PrimaryButton from './PrimaryButton';

export default function PricingCard({ pricing }) {
  return (
    <div
      className={`min-w-[320px] md:w-full flex flex-col justify-between rounded-3xl px-7 py-7 font-outfit ${pricing.recommended ? 'bg-white' : 'bg-white'}`}
    >
      <div className="mb-5 md:mb-10">
        <div className="flex gap-3 items-center text-xl font-medium">
          <span>{pricing?.name}</span>
          {pricing?.recommended && (
            <span className="uppercase text-[11px] font-normal text-primary-500 bg-primary-50 px-3 py-1 rounded-md">
              Most Popular
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm font-light mt-2">
          {pricing?.description}
        </p>
        <p className="mt-1 md:mt-2 text-[26px] font-medium text-primary-500">
          AED {pricing?.pricing?.price}
          <span className="text-black font-extralight text-[16px] ml-1">
            / {pricing?.pricing?.type}
          </span>
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {pricing?.inclusions?.map((inc) => (
            <div className="flex gap-4 items-center font-extralight">
              <span>
                <FaCheck className="text-green-700 text-md md:text-xl" />
              </span>
              <span className="leading-5">{inc}</span>
            </div>
          ))}
          {pricing?.exclusions?.map((inc, i) => (
            <div key={i} className="flex gap-4 items-center font-extralight">
              <span>
                <FaXmark className="text-red-700 text-md md:text-xl" />
              </span>
              <span className="leading-5">{inc}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 rounded-2xl px-4 py-2 md:px-5 md:py-2 text-sm font-extralight mt-5">
          <p>
            <span className="font-medium">Note:</span> Pricing may vary
            depending on travel plan and itinerary.
          </p>
        </div>
      </div>
      <PrimaryButton size="medium" className="w-full">
        Chat With Us Now
      </PrimaryButton>
    </div>
  );
}
