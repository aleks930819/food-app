import React from 'react';

const PageHeading = ({ heading, message }: { heading: React.ReactNode; message: string }) => {
  const createMarkup = (html: any) => {
    return { __html: html };
  };
  return (
    <>
      <p className="text-center text-xl md:text-2xl text-primary-light pb-2 italic">{message}</p>
      <h1 className="text-2xl md:text-4xl font-bold text-center" dangerouslySetInnerHTML={createMarkup(heading)} />
    </>
  );
};

export default PageHeading;
