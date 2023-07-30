import {I_BASE_INPUT_WITH_LABEL, INPUT_WITH_LABEL} from '@/components/input-with-label';
import React from 'react';

export function TEXT_INPUT_WITH_LABEL(props: I_BASE_INPUT_WITH_LABEL)
{
    return <INPUT_WITH_LABEL
        input_type={'text'}
        input_name={props.input_name}
        label_text={props.label_text}
    />;
}