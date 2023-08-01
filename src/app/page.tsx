import {TEXT_INPUT_WITH_LABEL} from '@/components/text-input-with-label';
import React from 'react';
import {SELECT_WITH_LABEL} from "@/components/select-with-label";

export default function Home(): React.JSX.Element {
    return (
        <main className='flex min-h-screen flex-col items-center p-0'>
            <TEXT_INPUT_WITH_LABEL input_name={'username'} label_text={'Username'}/>
            <SELECT_WITH_LABEL select_name={'player_select'} label_text={'Select player'}/>
        </main>
    );
}
