import Logo from '../components/Logo';
import { User, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

import Link from 'next/link';



export default function Home() {
  return (
    <div className='w-screen h-screen bg-[#090B0C] flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Text size='lg' className='text-gray-400 mt-4'>
          Log in to continue
        </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-5'>
        <label htmlFor="user" className='flex flex-col gap-3'>
          <Text className='font-semibold'>User:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input id='user' placeholder='Type your user' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Remember me for 30 days</Text>
        </label>
        <Link href="/account">
          <Button type='submit' className='mt-4'>
            Log In
          </Button>
        </Link>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Link href="/create">
          <Text asChild size='md'>
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>Create an account</a>
          </Text>
        </Link>
      </footer>
    </div>

  )
}
