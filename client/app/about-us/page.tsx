import { Undo2, Leaf, MessageSquare, CreditCard } from 'lucide-react';

import { YearlySummary } from '@/components/yearly-summary';

const AboutUsFeaturesItems = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex flex-col rounded-md justify-center items-center gap-2 shadow-lg py-10 px-2 group hover:bg-secondary transition-all duration-500 ease-in-out relative">
      <div className="bg-secondary icon-before mb-4  rounded-full p-4 text-white relative group-hover:text-secondary group-hover:bg-white transition-all duration-500 ease-in-out">
        {icon}
      </div>

      <span className="text-xl font-bold group-hover:text-white transition-all duration-500 ease-in-out">{title}</span>
      <p className="text-gray-600 group-hover:text-white transition-all duration-500 ease-in-out">{content}</p>
    </div>
  );
};

const ICON_SIZE = 40;

const AboutUsPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-2 mt-10 flex-col-reverse md:flex-row flex items-center justify-center md:gap-10">
        <div className="flex-1 grid grid-cols-2 gap-4  md:px-4 py-6">
          <AboutUsFeaturesItems
            icon={<Undo2 size={ICON_SIZE} />}
            title="Return Policy"
            content="Lorem ipsum dolor sit amet "
          />

          <AboutUsFeaturesItems
            icon={<Leaf size={ICON_SIZE} />}
            title="100% Fresh"
            content="Lorem ipsum dolor sit amet "
          />
          <AboutUsFeaturesItems
            icon={<MessageSquare size={ICON_SIZE} />}
            title="Support 24/7"
            content="Lorem ipsum dolor sit amet "
          />
          <AboutUsFeaturesItems
            icon={<CreditCard size={ICON_SIZE} />}
            title="Secure Payment"
            content="Lorem ipsum dolor sit amet "
          />
        </div>
        <section className="flex-1  mb-auto py-10">
          <em className="text-primary-light italic font-bold text-2xl mb-4 inline-block   pb-2">~ Why Choose Us? ~</em>
          <h2 className="text-3xl font-bold mb-4">We do not buy from the open market & traders.</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, reprehenderit perspiciatis dignissimos
            repellat reiciendis, deleniti accusamus vel eaque beatae, deserunt provident sapiente veritatis eligendi
            tempora sequi pariatur consectetur labore possimus?
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, reprehenderit perspiciatis dignissimos
            repellat reiciendis, deleniti accusamus vel eaque beatae, deserunt provident sapiente veritatis eligendi
            tempora sequi pariatur consectetur labore possimus?
          </p>
        </section>
      </div>
      <YearlySummary classNames="mb-[-80px]" />
    </div>
  );
};

export default AboutUsPage;
