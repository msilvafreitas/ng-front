import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}
 
export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp 
            className={clsx(
                ' py-3 px-4 bg-ngpurple text-blue-sons font-semibold font-sans rounded text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-ngpink',
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}