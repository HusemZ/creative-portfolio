'use client';
import React from 'react';
import Link from 'next/link';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    rounded?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
}

const Button: React.FC<ButtonProps> = ({ children, href, rounded, color = 'primary', ...props }) => {
    if (!props.disabled && !props.onClick && href) {
        props.onClick = () => {};
    }
    const className = `button ${rounded ? 'rounded' : ''} ${color ? color : ''} ${props.className || ''}`;
    const restProps = { ...props };
    delete restProps.className;

    if (href) {
        return (
            <Link href={href}>
                 <button className={className} {...restProps}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button className={className} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
