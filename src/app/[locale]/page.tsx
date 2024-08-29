"use client"
import { useTranslations } from 'next-intl';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations('HomePage');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>{t('title')}</h1>
      <h1>{t('decreption')}</h1>
      <select onChange={handleChange}   style={{ padding: '5px', fontSize: '16px' }}>
        <option value="vi">Tieng Viet</option>
        <option value="en">Tieng Anh</option>
        <option value="en2">English</option>
        <option value="vi2">Vietnamese</option>
      </select>
    </div>
  );
}
