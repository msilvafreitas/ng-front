import { User, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import Logo from '../components/Logo';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import users from '../data/users.json';
import { ToastContainer, toast } from 'react-toast'


export default function Create() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  function checkUser(user: typeof users[0]) {
    return user.username === username
  }

  function create(event: FormEvent) {
    event.preventDefault()
    const user = users.find(checkUser)
    if (user) {
      console.log("user already exist")
      toast.error("Oops! User already exist.")
    }
    else {
      if (password.length > 5) {
        console.log("Account created!")
        const newUser = {
          id: (users.length)+1,
          username: username,
          password: password,
          balance: 100
        }
        users.push(newUser)
        router.push({
          pathname: '/account/[pid]',
          query: { pid: newUser.id },
        })
      }
      else {
        console.log("Password must be at least 6 characters long")
        toast.error("Password must be at least 6 characters long")
      }
    }
  }

  return (
    <div className='w-screen h-screen bg-[#090B0C] flex flex-col items-center justify-center text-gray-100'>
      <ToastContainer delay={3000} />
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
            <TextInput.Input
              id='user'
              placeholder='Type your user'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Create password:</Text>
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


        <Button type='submit' className='mt-4' onClick={create}>
          Create Account
        </Button>

      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>

        <Text asChild size='md'>
          <a
            className='text-gray-400 underline hover:text-gray-200'
            onClick={() => router.push('/')}
          >
            Back
          </a>
        </Text>

      </footer>
    </div>

  )
}
