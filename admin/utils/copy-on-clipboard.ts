import toast from 'react-hot-toast';

export const onCopy = (value: string) => {
  navigator.clipboard.writeText(value);
  toast.success('Copied to clipboard');
};
