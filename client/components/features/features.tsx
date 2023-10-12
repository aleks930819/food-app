import Link from 'next/link';

import { Cherry, Bean, Apple, Milk, LeafyGreen, UtensilsCrossed } from 'lucide-react';

import { Grid } from '@/components/grid';

interface FeaturesItemProps {
  title: string;
  icon: React.ReactNode;
}

const FeaturesItem = ({ title, icon }: FeaturesItemProps) => {
  return (
    <Link href="#" className="flex gap-3 group bg-white items-center shadow-lg px-2 py-4">
      <span
        className="bg-gray-100 text-primary-light rounded-full  p-3
       group-hover:bg-primary-light group-hover:text-white transition-all duration-300 ease-in-out
      "
      >
        {icon}
      </span>
      <h3>
        <span className="font-bold">{title}</span>
      </h3>
    </Link>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: 'Fresh Fruits & Vegetable',
      icon: <Cherry size={24} />,
    },
    {
      title: 'Seeds & Nuts',
      icon: <LeafyGreen size={24} />,
    },
    {
      title: 'Dairy Items',
      icon: <Milk size={24} />,
    },
    {
      title: 'Organic Drinks',
      icon: <Apple size={24} />,
    },
    {
      title: 'Bread & Pastries',
      icon: <Bean size={24} />,
    },
    {
      title: 'Breakfast Cereals',
      icon: <UtensilsCrossed size={24} />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-[-20px] z-20 relative mb-4">
      <Grid gridType="sixColumn">
        {featuresData.map((feature, index) => (
          <FeaturesItem key={index} title={feature.title} icon={feature.icon} />
        ))}
      </Grid>
    </section>
  );
};
export default Features;
