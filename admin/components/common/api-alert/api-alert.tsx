import { Copy, Server } from 'lucide-react';
import toast from 'react-hot-toast';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}

const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'Public API',
  admin: 'Admin API',
};

const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive',
};

const onCopy = (description: string) => {
  navigator.clipboard.writeText(description);
  toast.success('Copied to clipboard.');
};

const ApiAlert = ({ description, title, variant = 'public' }: ApiAlertProps) => {
  return (
    <Alert className="">
      <Server className="w-6 h-6 mr-2" />
      <AlertTitle className="flex items-center gap-x-2 font-medium">
        {title}
        <Badge className="ml-auto" variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between  w-full overflow-x-auto text-sm text-gray-500 bg-gray-100 rounded-md p-2 mt-4">
        <code className="">
          <pre>{description}</pre>
        </code>
        <Button variant="outline" size="icon" onClick={() => onCopy(description)}>
          <Copy className="w-4 h-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ApiAlert;
