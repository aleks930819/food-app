'use client';

import CounterUp from 'react-countup';

interface CounterUpProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  duration: number;
}

const CountComponent = ({ title, count, icon, duration }: CounterUpProps) => {
  return (
    <div className="flex  items-center justify-center gap-4 md:w-auto">
      <span className="">{icon}</span>
      <div className=" flex flex-col justify-start items-start gap-1 ">
        <span className="text-black font-semibold text-2xl relative">
          <CounterUp end={count} duration={duration} />
          <span>
            <span className="absolute -right-4 bottom-2 text-xl text-secondary font-bold"> &#43;</span>
          </span>
        </span>
        <span className="text-gray-700 font-semibold text-md">{title}</span>
      </div>
    </div>
  );
};

export default CountComponent;
