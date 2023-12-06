import React from 'react'
import { CiGrid2H, CiGrid2V } from "react-icons/ci";

const LayoutButton = ({layout, setLayout}) => {
  return (
    <button type="button" className="grid-layout-button flex  justify-between" onClick={() => setLayout(!layout)}>
    {layout ? <CiGrid2V /> : <CiGrid2H />}
    {layout ? "Grid" : "List"}
  </button>
  )
}

export default LayoutButton;