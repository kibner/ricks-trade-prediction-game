import {TEXT_INPUT} from '@/components/text-input';
import React from 'react';

export default function Home(): React.JSX.Element
{
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <TEXT_INPUT input_name={'username'} label_text={'Username'}/>
    </main>
    );
}
