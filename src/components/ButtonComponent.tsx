import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const ButtonComponent = ({ children, color = 'primary', ...props }: CustomButtonProps) => {
    return (
        <Button
            variant="contained"
            style={{
                backgroundColor: '#FF8D29', // Soft mint green color
                color: '#FFE8E7', // Orange font color
                borderRadius: '10px', // Adjusted border radius for slightly rounded corners
                padding: '20px 40px', // Padding for the button
                fontSize: '1.2rem', // Larger font size
                fontWeight: 'bolder', // Very bold font weight
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)', // Slightly elevated shadow effect
                margin: '20px auto', // Added margin to create space around the button and 'auto' for horizontal centering
                display: 'block', // Ensures the button takes the full width available
            }}
            {...props}
        >
            {children}
        </Button>

    );
};

export default ButtonComponent;
