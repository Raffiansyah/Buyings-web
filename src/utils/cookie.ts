export const getAccessTokenClient = (): string | undefined => {
  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  };

  return getCookie('accessToken');
};

export const setAccessToken = (token: string, expiresInDays: number = 1) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expiresInDays);

  document.cookie = `accessToken=${token}; expires=${expirationDate.toUTCString()}; path=/; secure; samesite=strict`;
};

export const removeAccessToken = () => {
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
