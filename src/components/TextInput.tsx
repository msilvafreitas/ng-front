import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded w-full transition-colors focus-within:ring-2 ring-ngpink'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
} 

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-xs outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}