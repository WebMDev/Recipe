import React from 'react';

const ButtonRed = ({name, style, tag, type, disabled}) => {
  return (
    <button className={`w-fit p-[13px_22px] text-white bg-[red] font-[700] text-[14px] rounded-[10px] ${style} ${tag} ${type} ${disabled} hover:bg-black hover:text-white cursor-pointer`}>{name}</button>
  )
}

export default ButtonRed;