import React from 'react'
import { urlFor } from '../client'

const Pin = (props: { pin: any, key: any }) =>
{
    return (
        <div>
            <img className='rounded-lg w-full' src={urlFor(props.pin.image).width(250).url()} alt="user-post" />
        </div>
    )
}

export default Pin