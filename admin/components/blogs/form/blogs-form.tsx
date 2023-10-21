'use client';

import { Trash } from 'lucide-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

import { useState } from 'react';
import axios from 'axios';

import { StaticPage } from '@prisma/client';

import Editor from '@/components/editor/editor';
import { OutputData } from '@editorjs/editorjs';
import { AlertModal } from '@/components/common/modals/alert-modal';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import Heading from '@/components/common/heading/heading';
import ImageUpload from '@/components/common/image-upload/image-upload';

interface StaticProps {
  initialData: StaticPage | null;
}

const formSchema = z.object({
  title: z.string(),
  images: z.object({ url: z.string() }).array(),
  content: z.string(),
  createdBy: z.string(),
});

type StaticPropValues = z.infer<typeof formSchema>;

const BlogForm = ({ initialData }: StaticProps) => {
  const params = useParams();
  const router = useRouter();

  console.log(initialData);

  const [data, setData] = useState<OutputData>();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Blog article' : 'New Blog article';
  const description = initialData ? 'Edit blog article details' : 'Create new blog article';
  const toastMessage = initialData ? 'Blog article updated successfully' : 'Blog article created successfully';

  const action = initialData ? 'Save' : 'Create';

  const form = useForm<StaticPropValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      createdBy: '',
      images: [],
      content: '',
    },
  });

  const onSubmit = async (values: StaticPropValues) => {
    try {
      setLoading(true);

      values.content = JSON.stringify(data);

      if (initialData) {
        await axios.patch(`/api/${params.storeId}/blogs/${initialData.slug}`, values);
      } else {
        await axios.post(`/api/${params.storeId}/blogs`, values);
      }
      toast.success(toastMessage);
      router.refresh();
      router.push(`/${params.storeId}/blogs`);
    } catch (err) {
      toast.error('Something went wrong, please try again');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/blogs/${initialData?.slug}`);
      router.refresh();
      router.push('/');
      toast.success('Blog article deleted successfully');
    } catch (err) {
      toast.error('Something went wrong, please try again. If the problem persists, please contact us at "');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />

        {initialData && (
          <Button
            variant="destructive"
            color="icon"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field?.value?.map((image) => image?.url)}
                    disabled={loading}
                    onChange={(url) => field.onChange([...field?.value, { url }])}
                    onRemove={(url) => field.onChange([...field?.value.filter((image) => image.url !== url)])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Static Page Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="createdBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Created by</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Created by" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Editor
            data={initialData?.content ? JSON.parse(initialData.content) : data}
            onChange={setData}
            holder="content"
          />
          <Button type="submit">{action}</Button>
        </form>
      </Form>
    </>
  );
};

export default BlogForm;
