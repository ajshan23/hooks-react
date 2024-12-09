import React, { memo } from 'react'

const Navbar = ({ data, increment }) => {
    console.log("rendered navbar");

    return (
        <div>Navbar is here with data:{data}</div>
    )
}

export default memo(Navbar)