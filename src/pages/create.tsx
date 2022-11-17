import { User, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import Logo from '../components/Logo';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import Link from 'next/link';


export default function Create() {
  return (
    <div className='w-screen h-screen bg-[#090B0C] flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Text size='lg' className='text-gray-400 mt-4'>
          Create your account
        </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-5'>
        <label htmlFor="user" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Create user:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input id='user' placeholder='Type your user' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Create password:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder='********' />
          </TextInput.Root>
        </label>

        <Link href="/account">
          <Button type='submit' className='mt-4'>
            Create Account
          </Button>
        </Link>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Link href="/">
          <Text asChild size='md'>
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>Back</a>
          </Text>
        </Link>
      </footer>
    </div>

  )
}
