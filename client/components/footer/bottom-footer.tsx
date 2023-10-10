import Link from 'next/link';

const currentYear = new Date().getFullYear();

const BottomFooter = () => {
  return (
    <div className="border-t max-w-6xl mx-auto  border-gray-300 text-gray-200 flex w-full justify-between items-center pt-2 pb-2 px-2 mt-10">
      <p>
        <span className="">NutriNosh</span> &copy; {currentYear}
      </p>

      <p className="">
        <Link target="_blank" href="https://github.com/aleks930819" className="">
          Develop by <span className="text-primary-dark underline">@alex</span>
        </Link>
      </p>
    </div>
  );
};

export default BottomFooter;
