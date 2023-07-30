import React from 'react';
import 'server-only';

export interface I_TEXT_INPUT
{
    input_name: string,
    label_text: string
}

export function TEXT_INPUT(props: I_TEXT_INPUT)
{
    return <label>
        {props.label_text}
        <input name={props.input_name} className={'block'}/>
      </label>;
}
