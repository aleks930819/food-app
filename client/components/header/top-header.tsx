import { Heart } from 'lucide-react';

const TopHeaderActionButton = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button>
      <span className="text-gray-500 font-bold flex items-center   text-sm hover:text-primary-dark transition-colors duration-200 ease-out cursor-pointer">
        {icon && <span className="mr-1">{icon}</span>}
        {text}
      </span>
    </button>
  );
};

const TopHeader = () => {
  return (
    <div className="text-gray-500 border text-center py-3 px-2 sm:px-4 lg:px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <p>
          Welcome to{' '}
          <span className="bg-primary-light text-white text-lg font-bold px-1 py-0.5 rounded-sm angled-span">
            NutriNosh
          </span>
        </p>
        {/* ACTIONS */}
        <div className="flex gap-4 items-center">
          <TopHeaderActionButton text="My Wishlist" icon={<Heart size={14} />} onClick={() => {}} />
          <div className="bg-primary-light my-4 w-[.5px] h-4"></div>
          <TopHeaderActionButton text="Sign In" onClick={() => {}} />
          <div className="bg-primary-light my-4 w-[.5px] h-4"></div>
          <TopHeaderActionButton text="Sign Up" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
