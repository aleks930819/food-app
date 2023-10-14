import { Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialIcons = () => {
  return (
    <span className="inline-flex items-center gap-2">
      <Facebook size={17} className="text-gray-400 cursor-pointer" />
      <Twitter size={17} className="text-gray-400 cursor-pointer" />
      <Linkedin size={17} className="text-gray-400 cursor-pointer" />
    </span>
  );
};

export default SocialIcons;
