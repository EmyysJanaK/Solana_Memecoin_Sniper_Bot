import { FC } from 'react'

interface Props {
    isSwitch: boolean
    handleSwitch: Function
}

import React from 'react';

export const ColorSwitch: FC<Props> = ({ isSwitch, handleSwitch }) => {
    return (
        <div
            className={`border-bright rounded-[50%] w-4 h-4 cursor-pointer ${
                isSwitch ? 'shadow-[0_0_5px_5px_green] bg-green' : 'shadow-[0_0_5px_5px_red] bg-warning'
            }`}
            onClick={() => handleSwitch()}
        ></div>
    );
};
