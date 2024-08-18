'use client';

import { useEffect } from 'react';
import { useVerify } from '~/service/mutation';

export default function Confirm() {
  const { mutateAsync: verify } = useVerify();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token_hash') || '';

  useEffect(() => {
    if (token && typeof token === 'string') {
      verify(token);
    }
  }, [token, verify]);

  return <h1>Verifying your account...</h1>;
}
