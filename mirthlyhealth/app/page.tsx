'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src='/home.jpg'
          width={100}
          height={100}
          alt='home.jpg'
          layout='fill'
        ></Image>
        <div>Sample</div>
      </div>
    </div>
  );
}
