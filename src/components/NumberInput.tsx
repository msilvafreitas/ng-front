import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface NumberInputRootProps {
    children: ReactNode;
}

function NumberInputRoot(props: NumberInputRootProps) {
    return (
        <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded w-full transition-colors focus-within:ring-2 ring-ngpink'>
            {props.children}
        </div>
    )
}

NumberInputRoot.displayName = 'NumberInput.Root'

export interface NumberInputIconProps {
    children: ReactNode;
} 

function NumberInputIcon(props: NumberInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

NumberInputIcon.displayName = 'NumberInput.Icon'


export interface NumberInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function NumberInputInput(props: NumberInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-xs outline-none"
            {...props}
        />
    )
}

NumberInputInput.displayName = 'NumberInput.Input'

export const NumberInput = {
    Root: NumberInputRoot,
    Input: NumberInputInput,
    Icon: NumberInputIcon,
}