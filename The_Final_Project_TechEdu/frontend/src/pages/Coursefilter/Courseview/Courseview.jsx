import React, { useState } from 'react'
import Coursedisplay from '../../../components/Coursedisplay/Coursedisplay';

const Courseview = () => {
    const [category, setcategory] = useState("All");
    return (
        <div>
            <Coursedisplay category={category} />
        </div>
    )
}

export default Courseview

