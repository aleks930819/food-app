'use client';

import * as z from 'zod';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Store } from '@prisma/client';

import { Trash } from 'lucide-react';

import toast from 'react-hot-toast';
import Heading from '@/components/common/heading/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AlertModal } from '@/components/common/modals/alert-modal';
import ApiAlert from '../common/api-alert/api-alert';
import { useOrigin } from '@/hooks/user-origin';

interface SettingsFormProps {
  initialData: Store;
}

const formSchmea = z.object({
  name: z.string().min(3).max(255),
});

type SettingsFormValues = z.infer<typeof formSchmea>;

const SettingsForm = ({ initialData }: SettingsFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const origin = useOrigin();
  const router = useRouter();
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchmea),
    defaultValues: initialData,
  });

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      router.push('/');
      toast.success('Store deleted successfully.');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true);
      await axios.patch(`/api/stores/${params.storeId}`, data);
      router.refresh();
      toast.success('Store updated successfully.');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal isOpen={open} loading={loading} onClose={() => setOpen(false)} onConfirm={onDelete} />
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage your store settings." />
        <Button disabled={loading} variant="destructive" size="icon" onClick={() => setOpen(true)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div className="grid grid-cols-3 gap-8">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Store name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-28 mr-auto" disabled={loading}>
            {loading ? 'Loading...' : 'Save'}
          </Button>
        </form>
      </Form>
      <Separator />
      <ApiAlert title="NEXT_PUBLIC_API_URL" description={`${origin}/api/${params.storeId}`} variant="admin" />
    </>
  );
};

export default SettingsForm;
