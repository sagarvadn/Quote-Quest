import React from 'react'

export default function Card(props) {

  return (
    <div className="card my-3" style={{ 'backgroundImage': props.Gradient }}>
      {/* <img src="https://via.placeholder.com/400x200.webp/524c4c/000000" className="card-img-top" alt="..." /> */}
      {/* <img src={backimg} className="card-img-top" alt="..." /> */}
      <div style={{ height: '200px' }}></div>
      <p className="card-text h4 img-text-centered">{props.Phrase}</p>
    </div>
  )
}