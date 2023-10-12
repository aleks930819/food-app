import Link from 'next/link';
import BottomFooter from './bottom-footer';
import FooterGalleryImageItem from './footer-gallery-image-item';

import { navLinks, LinkType, footerLinks } from '@/data/links';
import { getBlogs } from '@/actions';
import { ChevronRight } from 'lucide-react';

const FooterColumn = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-40">
      <h3 className="text-xl font-semibold mb-auto">{heading}</h3>
      {children}
    </div>
  );
};

const FooterLinksColumn = ({ links }: { links: LinkType[] | undefined }) => {
  if (!links) return null;

  return (
    <nav className="mb-auto mt-4">
      <ul>
        {links.map((link: LinkType) => (
          <li key={link.title} className="mb-2 text-gray-200 text-md max-w-sm ">
            <ChevronRight size={14} className="inline-block mr-1" />
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Footer = async () => {
  const blogs = await getBlogs();

  // transform blog data to links suitable for footer
  const blogLinks = blogs?.slice(0, 4).map((blog) => ({
    title: blog.title,
    href: `/blogs/${blog.slug}`,
  }));

  return (
    <footer className="bg-primary-light px-4 md:px-auto pb-4 pt-10 mt-20 ">
      <div className="max-w-6xl mx-auto text-white flex flex-col justify-start items-start pb-10 md:flex-row md:justify-center md:pb-24 md:items-center gap-20">
        <FooterColumn heading="NutriNosh">
          <FooterLinksColumn links={navLinks} />
        </FooterColumn>
        <FooterColumn heading="More Information">
          <FooterLinksColumn links={footerLinks} />
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
          <FooterLinksColumn links={blogLinks} />
        </FooterColumn>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
