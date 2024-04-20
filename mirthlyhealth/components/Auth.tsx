import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarForm } from './Calender';

export function TabsDemo() {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Login</TabsTrigger>
        <TabsTrigger value='password'>Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Your Personalized Stress Relief Starts Here.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='name'>Email</Label>
              <Input id='email' placeholder='johndoe23@gmail.com' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='username'>Password</Label>
              <Input id='password' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Welcome Back</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Feeling Overwhelmed? Find Your Peace of Mind Here
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='current'>Email Address</Label>
              <Input id='email' type='password' placeholder='johndoe@abc.com' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>Password</Label>
              <Input id='password' type='password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>Date of Birth</Label>
              <CalendarForm />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Explore</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
