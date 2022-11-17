
import { User, CurrencyDollar } from 'phosphor-react';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import Logo from '../components/Logo';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Transfer } from '../components/Transfer';
import transfers from '../data/transfers.json';
import Link from 'next/link';



export default function Account() {

  const [list, setList] = useState(transfers);

  return (
    <div className='w-screen h-screen bg-[#090B0C] flex flex-col items-center justify-center text-gray-100 lg:grid lg:grid-cols-2'>
      <header className='flex flex-col items-center lg:col-span-1'>
        <div className='w-28'>
          <Logo />
        </div>
        <Heading className='mt-4'>
          Welcome <span className='text-ngpink'>User</span> !
        </Heading>
        <Text size='lg' className='text-gray-400 mt-4'>
          Your account balance is:
        </Text>
        <Heading size='lg' className='mt-4'>
          R$ 100,00
        </Heading>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-5 lg:col-span-1'>
        <label htmlFor="user" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Transfer money to:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input id='user' placeholder='Type the user' />
          </TextInput.Root>
        </label>
        <label htmlFor="value" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Value:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <CurrencyDollar />
            </TextInput.Icon>
            <TextInput.Input id='value' type='number' placeholder='Insert the value' />
          </TextInput.Root>
        </label>


        <Button type='submit' className='mt-4'>
          Transfer
        </Button>
      </form>
      <div className='flex flex-col items-center gap-3 lg:col-span-2'>
        <Heading className='mt-4'>
          Transfer history:
        </Heading>
        {list.map(item => (
          <div key={item.id}>
            <Transfer key={item.id} {...item} />
          </div>
        ))}
      </div>
      <footer className='flex flex-col items-center gap-4 mt-8 lg:col-span-2'>
        <Link href="/">
          <Text asChild size='md'>
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>Logout</a>
          </Text>
        </Link>
      </footer>
    </div>

  )
}
