'use client';
import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { ChevronsRight } from 'lucide-react';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  currentPathClass?: string;
  capitalizeLinks?: boolean;
};

const Seperator = () => {
  return (
    <li className="mx-2  mt-auto mb-auto">
      <ChevronsRight size={16} />
    </li>
  );
};

const Breadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  currentPathClass,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const currentPath = pathNames[pathNames.length - 1];
  const formatLinkText = (str: string) => str.replace(/-/g, ' ');

  if (pathNames.length === 0) return null;

  return (
    <div className="relative h-[25vh] ">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] ">
        <Image
          src="/images/breadcrumb.jpg"
          fill
          sizes="(max-width: 1400px) 100vw, 1400px "
          alt="breadcrumb"
          priority={true}
          className="object-cover object-center  w-full h-full"
        />
        <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      </div>
      <ul className="flex absolute  top-0 left-0 text-white  w-full h-full text-center justify-center">
        <li className="text-white mt-auto mb-auto">
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length !== 0 && <Seperator />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
          itemLink = formatLinkText(itemLink);
          return (
            <React.Fragment key={index}>
              <li className={`text-white mb-auto mt-auto`}>
                {currentPath === link ? (
                  // Check if the current path is a product page and if it is, display the word "Продукт"
                  // To avoid displaying the product name in the breadcrumb
                  //  TODO: Make this check more robust
                  <span className="text-white">
                    {pathNames[0] === 'products' && pathNames.length > 1 ? 'Product' : itemLink}
                  </span>
                ) : (
                  // <span className="text-gray-500">{itemLink}</span>
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {index !== pathNames.length - 1 && <Seperator />}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
