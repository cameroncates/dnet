import React from 'react'

export default function SimpleDropdown(props) {
    let { list } = props
    return (
        <div className="dropdown-menu dropdown-menu-right post__dropdown px-3" aria-labelledby="dropdownMenuButton" style={{ width: "259px"}}>
            {list && list.map((item, i) => (
                <button 
                    key={i} 
                    className={"btn btn-block bg-transparent font-roboto-light my-0 py__8px " + item.className} href="#">
                        <span className="small">{item.title}</span>
                    </button>
            ))}
        </div>
    )
}
