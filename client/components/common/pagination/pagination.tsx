'use client';

import { motion, useInView } from 'framer-motion';

import { ChevronRight, ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

import qs from 'query-string';

const Pagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const ref: any = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  // if there is only one page or no page at all, don't show pagination
  if (totalPages === 1 || totalPages === 0) {
    return null;
  }

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  // extract the current url query params and convert it to an object
  // so we can update the page query and to keep the other query params
  const currentUrl = qs.parse(searchParams.toString());

  const constructNewUrl = (page: number) => {
    let newQuery = {
      ...currentUrl,
      page: page,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: newQuery,
      },
      { skipNull: true },
    );

    return url;
  };

  const handleNextPage = () => {
    const url = constructNewUrl(Number(page) + 1);
    router.push(url);
  };

  const handlePrevPage = () => {
    const url = constructNewUrl(Number(page) - 1);
    router.push(url);
  };

  const handlePage = (page: number) => {
    const url = constructNewUrl(page);
    router.push(url);
  };

  return (
    <motion.nav
      className="flex items-center justify-center mt-10"
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className="flex rounded-md">
        <button
          disabled={currentPage === 1}
          aria-label="Previous"
          onClick={handlePrevPage}
          className={` ${
            currentPage === 1 ? 'opacity-50' : ''
          } disabled:opacity-50  font-bold border-2 border-primary-dark text-primary-dark px-4 py-2 rounded-l-md focus:outline-none mr-4`}
        >
          <span>
            <span className="sr-only">Previous</span>
            <ChevronLeft size={22} />
          </span>
        </button>
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => handlePage(i + 1)} aria-label={`Page ${i + 1}`}>
              <span
                className={`${
                  currentPage === i + 1
                    ? ' bg-primary-dark text-white  hover:bg-primary-light transition-all duration-300 ease-in-out'
                    : ''
                }
              text-lg px-4  py-2
                `}
              >
                {i + 1 < 10 ? `${i + 1}` : i + 1}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          aria-label="Next"
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? 'opacity-50' : ''
          } disabled:opacity-50 border-2 border-primary-dark text-primary-dark px-4 py-2 rounded-r-md focus:outline-none ml-4`}
        >
          <span>
            <span className="sr-only">Next</span>
            <ChevronRight size={22} />
          </span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Pagination;
