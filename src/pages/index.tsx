import Logo from '../components/Logo';
import { User, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import users from '../data/users.json';

import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';



export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function checkUser(user: typeof users[0]) {
    return user.username === username
  }

  function login(event: FormEvent) {
    event.preventDefault()
    const user = users.find(checkUser)
    if (user) {
      if (password === user.password) {
        console.log("Login done!")
        router.push({
          pathname: '/account/[pid]',
          query: { pid: user.id },
        })
      }
      else {
        console.log("Wrong password")
      }
    }
    else {
      console.log("user doesn't exist")
    }
  }


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
            <TextInput.Input
              id='user'
              placeholder='Type your user'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id='password'
              type='password'
              placeholder='********'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Remember me for 30 days</Text>
        </label>
        <Button type='submit' className='mt-4' onClick={login}>
          Log In
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>

        <Text asChild size='md'>
          <a
            className='text-gray-400 underline hover:text-gray-200'
            onClick={() => router.push('/create')}
          >Create an account</a>
        </Text>

      </footer>
    </div>

  )
}
