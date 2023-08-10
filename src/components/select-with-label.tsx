'use client';

import React from 'react';

export interface I_SELECT_WITH_LABEL
{
    select_name: string,
    select_class_name?: string | undefined,
    label_text: string
}

export function SELECT_WITH_LABEL(props: I_SELECT_WITH_LABEL): React.JSX.Element
{
    let class_name: string = 'block dark:text-black';

    if (props.select_class_name)
    {
        class_name += ' ' + props.select_class_name;
    }

    return <label>
        {props.label_text}
        <select name={props.select_name} className={class_name}>
            <option value=''>--Please choose an option--</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='hamster'>Hamster</option>
            <option value='parrot'>Parrot</option>
            <option value='spider'>Spider</option>
            <option value='goldfish'>Goldfish</option>
        </select>
    </label>;
}