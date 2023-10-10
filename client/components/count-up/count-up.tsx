'use client';

import CounterUp from 'react-countup';

interface CounterUpProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const CountComponent = ({ title, count, icon }: CounterUpProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {icon}
      <div className=" flex flex-col gap-1">
        <span className="text-black font-semibold text-2xl">
          <CounterUp end={count} duration={2} />
        </span>
        <span className="text-gray-700 font-semibold text-md">{title}</span>
      </div>
    </div>
  );
};

export default CountComponent;
