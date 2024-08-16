import React from 'react';

export default function LayoutProfile({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>THIS IS THE LAYOUT</h1>
            {children}
        </div>
    );
  }
  