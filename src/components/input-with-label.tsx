import React, {HTMLInputTypeAttribute} from 'react';
import 'server-only';

export interface I_INPUT_WITH_LABEL
{
    input_type: HTMLInputTypeAttribute,
    input_name: string,
    label_text: string
}

export function INPUT_WITH_LABEL(props: I_INPUT_WITH_LABEL)
{
    return <label>
        {props.label_text}
        <input name={props.input_name} className={'block'} type={props.input_type}/>
      </label>;
}
