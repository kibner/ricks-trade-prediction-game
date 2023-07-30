import {TEXT_INPUT_WITH_LABEL} from '@/components/text-input-with-label';
import React from 'react';

export default function Home(): React.JSX.Element
{
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <TEXT_INPUT_WITH_LABEL input_name={'username'} label_text={'Username'}/>
    </main>
    );
}
