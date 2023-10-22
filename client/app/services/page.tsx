import { Grid } from '@/components/common';
import { ServicesCard } from '@/components/services';

import { Truck, Leaf, Cherry } from 'lucide-react';

const servicesPageData = [
  {
    id: 1,
    title: 'Agricultural Services',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: '/images/services/1.jpg',
    icon: <Leaf size={32} />,
  },
  {
    id: 3,
    title: 'Organic Store Services',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: '/images/services/2.jpg',
    icon: <Cherry size={32} />,
  },
  {
    id: 1,
    title: 'Product Delivery Services',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image: '/images/services/3.jpg',
    icon: <Truck size={32} />,
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Grid gridType="thirdColumn">
        {servicesPageData.map((service) => (
          <ServicesCard key={service.id} services={service} />
        ))}
      </Grid>
    </div>
  );
};

export default ServicesPage;
