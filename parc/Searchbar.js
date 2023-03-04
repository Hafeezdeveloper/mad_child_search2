import React, { useState } from 'react'

const Searchbar = (props) => {
    let {onSearch,getValue} = props

    // const [values,setValue] = useState()
    const [selected,setSelected] = useState('')

    const setValue = (e) =>{
        getValue(selected,e)
    }
  return (
    <div>
        <div>
            <input type="text" onChange={(e) =>setValue(e.target.value)}  />
        <div> 
            <select onChange={(e) => setSelected(e.target.value)} name="" id="">
            {onSearch.map((x,i)=>{
                return(
                    <option value={x.value}>{x.displayName}</option>
                )
            })}
            </select>
        </div>
        </div>
    </div>
  )
}

export default Searchbar
