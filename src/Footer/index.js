import React from 'react'

function Footer(props) {
  return (
    <footer className="w-full h-20 grid grid-cols-1 gap-5">
        {props.redes.map( link => (
            <a className="text-primary font-bold text-xl" href={link.link}>{link.user}</a>
        ))}
    </footer>
  )
}

export {Footer};