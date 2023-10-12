import { Star } from 'lucide-react';

const CountStarsOfReview = ({ num }: { num: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array(Math.ceil(num))
        .fill(0)
        .map((_, i) => (
          <Star key={i} size={18} className="text-[#efb343]" fill="#efb343" />
        ))}
    </div>
  );
};

export default CountStarsOfReview;
