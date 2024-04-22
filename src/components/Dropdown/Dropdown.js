import { useState } from "react"

import './Dropdown.scss'

export default function Dropdown({title, content}) {
    const [collapse, setCollapse] = useState(false)

    const click = () => {
        collapse ? setCollapse(false) : setCollapse(true)
    }

    return <>
        <div className="dropdown">
            <p className="dropdown__title">{title}</p>
            <button className="dropdown__button" type="button" onClick={click} aria-label={collapse ? 'fermer' : 'ouvrir'}>
                <div className={`dropdown__button__svg ${collapse.toString()}`}></div>
            </button>
        </div>
        <div className={`dropdown-content ${collapse.toString()}`}>
            {collapse && content}
        </div>
        </> 
}