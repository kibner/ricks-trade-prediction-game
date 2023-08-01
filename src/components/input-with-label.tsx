import React, {HTMLInputTypeAttribute} from 'react';
import 'server-only';

export interface I_BASE_INPUT_WITH_LABEL {
    input_name: string,
    label_text: string
}

export interface I_INPUT_WITH_LABEL
    extends I_BASE_INPUT_WITH_LABEL {
    input_type: HTMLInputTypeAttribute,
    input_class_name?: string | undefined;
}

export function INPUT_WITH_LABEL(props: I_INPUT_WITH_LABEL): React.JSX.Element {
    let class_name: string = 'block dark:text-black';

    if (props.input_class_name) {
        class_name += ' ' + props.input_class_name;
    }

    return <label>
        {props.label_text}
        <input name={props.input_name} className={class_name} type={props.input_type}/>
    </label>;
}
