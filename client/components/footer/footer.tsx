import Image from 'next/image';
import BottomFooter from './bottom-footer';
import FooterGalleryImageItem from './footer-gallery-image-item';

const FooterColumn = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-40">
      <h3 className="text-xl font-semibold mb-auto">{heading}</h3>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-light pb-4 pt-10 mt-20 ">
      <div className="max-w-6xl mx-auto text-white flex justify-center pb-24 items-center gap-20">
        <FooterColumn heading="NutriNosh">
          <nav className="mt-4">
            <ul>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </nav>
        </FooterColumn>

        <FooterColumn heading="Gallery">
          <div className="grid grid-cols-2 gap-2 mt-4">
            <FooterGalleryImageItem image="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            <FooterGalleryImageItem image="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
            <FooterGalleryImageItem image="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            <FooterGalleryImageItem image="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
          </div>
        </FooterColumn>
        <FooterColumn heading="Recent Posts">
          <nav className=" mt-4">
            <ul>
              <li className="mb-2 font-bold text-md max-w-sm">Our 6 of the Best Organic Chocolates to Buy.</li>
              <li className="mb-2 font-bold text-md max-w-sm">Our 6 of the Best Organic Chocolates to Buy.</li>
              <li className="mb-2 font-bold text-md max-w-sm">Our 6 of the Best Organic Chocolates to Buy.</li>
              <li className="mb-2 font-bold text-md max-w-sm">Our 6 of the Best Organic Chocolates to Buy.</li>
              <li className="mb-2 font-bold text-md max-w-sm">Our 6 of the Best Organic Chocolates to Buy.</li>
            </ul>
          </nav>
        </FooterColumn>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
