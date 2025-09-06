'use client';

import Link from 'next/link';
import { useLoader } from '../context/LoaderContext';

export default function SmartLink({ href, children, ...rest }) {
  const { setLoading } = useLoader();

  const handleClick = () => {
    setLoading(true); // Show loader immediately
  };

  return (
    <Link href={href}  {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
}
