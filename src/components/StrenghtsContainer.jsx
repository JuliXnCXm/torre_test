import React , {useLayoutEffect, useRef, useState } from 'react'


export default function StrenghtsContainer({strenghts,img,type, name}) {

    const container = useRef(null)
    const button = useRef(null)
    const [overflow, setOverflow] = useState(false)

    useLayoutEffect(() => {
        if ( container.current )
        {
            if ( container.current.scrollHeight >= 200 )
            {
                setOverflow(true)
            } else
            {
                setOverflow(false)
            }
        }
    } , [])

    const handleClick =  (e) => {
        if ( container )
        {
            if ( container.current.style.height === "200px" )
            {
                container.current.style.height = "auto"
                button.current.style.transform = "rotate(180deg)"
            } else
            {
                container.current.style.height = "200px"
                button.current.style.transform = "rotate(0deg)"
            }
        }
    }

    return ( strenghts.length > 0 ?
            <li className={`skills--list__category ${type}`}>
                <div>
                    <div className='skills--list__title'>
                        <img className='skills--list__title--icon' src={img} alt="" />
                        <h3>{name}</h3>
                    </div>
                        <div ref={container} className='skills--list__item' id='item'>
                            {strenghts.length > 0 && strenghts.map( strength =>
                            {
                                return (
                                    <span>{strength.name}</span>
                                )
                            } )}
                        </div>
                </div>
                { overflow &&
                <button ref={button} id='button' onClick={handleClick} className='button--more'>
                    <i style={{ fontSize: '40px' }} class="material-icons  material-icons-outlined">
                    expand_more
                    </i>
                </button>}
            </li>
            : null
    )
}
