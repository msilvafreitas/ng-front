
import { User, CurrencyDollar } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import Logo from '../../components/Logo';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { Transfer } from '../../components/Transfer';
import transfers from '../../data/transfers.json';
import users from '../../data/users.json';
import { useRouter } from 'next/router';
import { NumberInput } from '../../components/NumberInput';
import { ToastContainer, toast } from 'react-toast'



export default function Account() {
  const router = useRouter()
  const { pid } = router.query

  const [transferAccount, setTransferAccount] = useState('')
  const [transferValue, setTransferValue] = useState<Number>(0)
  const account: typeof users[0] = users.find(item => item.id === Number(pid))!;

  function transfer(event: FormEvent) {
    event.preventDefault()
    const today = new Date();
    const checkUser = users.find(element => element.username === transferAccount)
    if (checkUser) {
      if (transferValue > account.balance) {
        console.log("Insuficient funds")
        toast.error("Oops! You don't have sufficient funds to make this transfer")
      }
      else {
        const newTransfer = {
          id: Number(transfers.length + 1),
          from: account.username,
          to: transferAccount,
          value: Number(transferValue),
          date: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear().toString().slice(-2)}`
        }
        transfers.push(newTransfer)
        account.balance = Number(account.balance - Number(transferValue))
        checkUser.balance = Number(checkUser.balance + Number(transferValue))
        setTransferValue(0);
        setTransferAccount('');
        toast.success("Transfer sent successfully!")
      }
    }
    else {
      console.log("User doesnt exist")
      toast.error("Oops! Invalid user")
    }
  }


  const transfersIn = transfers.filter(transfer => transfer.to === account.username)
  const transfersOut = transfers.filter(transfer => transfer.from === account.username)

  return (
    <div className='w-screen h-screen bg-[#090B0C] flex flex-col items-center justify-center text-gray-100 lg:grid lg:grid-cols-2'>
      <ToastContainer delay={3000} />
      <header className='flex flex-col items-center lg:col-span-1'>
        <div className='w-28'>
          <Logo />
        </div>
        <Heading className='mt-4'>
          Welcome <span className='text-ngpink'>{account.username}</span> !
        </Heading>
        <Text size='lg' className='text-gray-400 mt-4'>
          Your account balance is:
        </Text>
        <Heading size='lg' className='mt-4'>
          R$ {(account.balance).toFixed(2)}
        </Heading>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-5 lg:col-span-1'>
        <label htmlFor="user" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Transfer money to:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              id='user'
              placeholder='Type the user'
              value={transferAccount}
              onChange={event => setTransferAccount(event.target.value)}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="value" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Value:</Text>
          <NumberInput.Root>
            <NumberInput.Icon>
              <CurrencyDollar />
            </NumberInput.Icon>
            <NumberInput.Input
              id='value'
              type='number'
              placeholder='Insert the value'
              value={Number(transferValue)}
              onChange={event => setTransferValue(Number(event.target.value))}
            />
          </NumberInput.Root>
        </label>


        <Button type='submit' className='mt-4' onClick={transfer}>
          Transfer
        </Button>
      </form>
      <div className='flex flex-col max-w-xl lg:ml-96 gap-3 lg:col-span-2'>
        <Heading className='mt-4'>
          Transfer history:
        </Heading>
        <Heading className='mt-4'>
          In:
        </Heading>
        {transfersIn.map(item => (
          <div key={item.id}>
            <Transfer key={item.id} {...item} />
          </div>
        ))}
        <Heading className='mt-4'>
          Out:
        </Heading>
        {transfersOut.map(item => (
          <div key={item.id}>
            <Transfer key={item.id} {...item} />
          </div>
        ))}
      </div>
      <footer className='flex flex-col items-center gap-4 mt-8 lg:col-span-2'>

        <Text asChild size='md'>
          <a
            href="#"
            className='text-gray-400 underline hover:text-gray-200'
            onClick={() => router.push('/')}
          >
            Logout</a>
        </Text>

      </footer>
    </div>

  )
}
