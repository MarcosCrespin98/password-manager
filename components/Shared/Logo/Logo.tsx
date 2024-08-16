import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold cursor-pointer">PasswordManager</h1>
    </Link>
  );
}