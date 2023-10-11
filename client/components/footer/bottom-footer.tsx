import Link from 'next/link';

const currentYear = new Date().getFullYear();

const BottomFooter = () => {
  return (
    <div className="border-t max-w-6xl mx-auto  border-gray-300 text-gray-200 flex flex-col gap-2 md:gap-0 md:flex-row w-full justify-between items-center pt-2 pb-2 px-2 mt-10">
      <p>
        <span className="">NutriNosh</span> &copy; {currentYear}
      </p>

      <p className="">
        <Link target="_blank" href="https://github.com/aleks930819" className="">
          Developed by <span className="text-black underline">@alex</span>
        </Link>
      </p>
    </div>
  );
};

export default BottomFooter;
