'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { login } from '@/server';
import { useData } from '@/utils/dataContext';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string({ required_error: 'Please Enter Email Address' }).email(),
  password: z.string().min(6, 'Password should be minimum 6 characters'),
});

export function SignInForm() {
  const { setUser } = useData();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const user = await login(values.email, values.password);
    setUser(user.uid);
    router.push('/dashboard');
    console.log(user);
    // redirect('/dashboard');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder='Enter Your Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter Your Password'
                  {...field}
                  type='password'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>
          Welcome Back
          <ArrowRight className='ml-2' />
        </Button>
      </form>
    </Form>
  );
}
