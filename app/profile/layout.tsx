import React from 'react';

export default function LayoutProfile({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>Aqui Va el perfil guaton culiao</h1>
            {children}
        </div>
    );
  }
  