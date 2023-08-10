import {I_BASE_INPUT_WITH_LABEL, INPUT_WITH_LABEL} from '@/components/input-with-label';
import React from 'react';
import 'server-only';

export interface I_TEXT_INPUT_WITH_LABEL
    extends I_BASE_INPUT_WITH_LABEL
{
}

export function TEXT_INPUT_WITH_LABEL(props: I_TEXT_INPUT_WITH_LABEL): React.JSX.Element
{
    return <INPUT_WITH_LABEL
        input_type={'text'}
        input_name={props.input_name}
        label_text={props.label_text}
    />;
}