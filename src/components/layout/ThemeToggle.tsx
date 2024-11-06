'use client'
import React, { useEffect, useState } from 'react';
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        setLoading(false);
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newTheme = prev ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            return !prev;
        });
    };

    if (loading) {
        return '';
    }

    return (
        <Button onClick={toggleTheme} rounded>
            {isDark === null ? null : isDark ? (
                <Image src='/sun.png' alt='Light Theme' width={16} height={16} />
            ) : (
                <Image src='/moon.png' alt='Dark Theme' width={16} height={16} />
            )}
        </Button>
    );
};

export default ThemeToggle;
