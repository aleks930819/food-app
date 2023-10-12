import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';

import { getBlogs } from '@/actions';
import { PageHeading } from '@/components/page-heading';

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <PageHeading
        message="~ From our blog ~"
        heading={`On a quest to bring together and <br/>  closer to you all things Organic.`}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto mt-12 gap-4">
        {blogs?.map((blog) => (
          <div className="  mb-28 px-2" key={blog.id}>
            <div className="w-full h-64 relative group">
              <span className="blog-card-image-hover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              <img src={blog.image} alt="blog image" width={320} height={300} className="w-full h-full object-cover" />

              {/* CONTENT */}
              <div className="absolute -bottom-20 w-4/5 p-4 mx-auto left-0 right-0 bg-white shadow-md text-black text-center">
                <span className="flex justify-between items-center w-full">
                  <time className="flex items-center gap-2">
                    <Calendar size={20} className="text-primary-light" />
                    {blog.createdAt}
                  </time>
                  <span className="flex items-center gap-2">
                    <User size={20} className="text-primary-light" />
                    {blog.createdFrom}
                  </span>
                </span>

                <h2 className="mt-3 ">{blog.title.substring(0, 50) + '...'}</h2>
                <span className="w-1/2 mx-auto block h-1 bg-primary-light mt-2 mb-4" />
                {/* TODO: Find way its not showing the Link element */}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-primary-light px-4 py-2 font-bold   inline-flex items-center"
                >
                  Read More
                  <ChevronRight
                    size={18}
                    className="ml-2 transition-all duration-500 ease-in-out group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogsPage;
