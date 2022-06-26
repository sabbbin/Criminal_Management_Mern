import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const UsePasswordToggle = () => {
    const [visible, setvisibility]=useState(false);
    const Icon=(<FontAwesomeIcon  icon={visible?'eye-slash':'eye'}
        onClick={()=>setvisibility(visible=>!visible)} />)

    const Inputtype=visible?'text':'password';
    return [Inputtype,Icon];
};

export default UsePasswordToggle;