import React , {useRef } from 'react'


export default function StrenghtsContainer({strenghts,img,type, name}) {

    const container = useRef(null)

    const handleClick =  (e) => {
        if ( container )
        {
            if ( container.current.style.height === "200px" )
            {
                container.current.style.height = "auto"
            } else
            {
                container.current.style.height = "200px"
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
                <div id='button' onClick={handleClick} className='button--more'>
                    <i style={{ fontSize: '40px' }} class="material-icons  material-icons-outlined">
                        expand_more
                    </i>
                </div>
            </li>
            : null
    )
}
