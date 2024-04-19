'use client';

import {persistor, store} from '@/store';
import Link from 'next/link';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default function Home() {
  return (
    <div className='container'>
      <h1> Test Quiz</h1>
      <Link href='/quiz'>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}
