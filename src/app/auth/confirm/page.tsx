// app/confirm/page.js
'use client';

import { useEffect, useState } from 'react';
import { useVerify } from '~/service/mutation';

export default function Confirm()  {
  const verifyOtpMutation = useVerify();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token_hash') || '';
    setAccessToken(token);
    verifyOtpMutation.mutateAsync(token)
  }, [accessToken]);

  return (
    <div>
      <h1>Account Confirm</h1>
    </div>
  );
};
