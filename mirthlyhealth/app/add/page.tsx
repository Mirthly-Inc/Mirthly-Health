import { CardWithForm } from '@/components/Forms';
import { NavigationMenuDemo } from '@/components/Navigation';
const page = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <NavigationMenuDemo />
      <div className='flex items-center justify-center w-full h-full'>
        <CardWithForm />
      </div>
    </div>
  );
};

export default page;
