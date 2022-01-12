import React, { useState } from 'react'

export default function SimpleSelectOption(props) {
    let { list } = props    
    const [option, setOption] = useState(list[0])
    return (
        <div className="dropdown">
            <button className="btn bg__light5 px-0 text__dark py-0 px-2 border-radius__5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="small mr-1">{option && (option.name || option.title) ? (option.name || option.title) : "Undefined"}</span>
                <span className="mdi small mdi-chevron-down"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right bg__light6 py-0 px-2 border-0 box-shadow__dark filter__dropdown" aria-labelledby="dropdownMenuButton" style={{ width: "60px"}}>
                {list && list.map((item, i) => (
                    <button 
                        onClick={() => setOption(item)}
                        key={i} 
                        className={"btn btn-block text-left bg-transparent font-roboto-light my-0 py__3px border-bottom " + item.className} href="#">
                            <span className="small">{item.title}</span>
                        </button>
                ))}
            </div>            
        </div>  
    )
}
