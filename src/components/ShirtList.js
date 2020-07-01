import React from 'react'

export default function ShirtList(props) {
  const { shirtList, buy } = props
  return (
    <div>
      <h1>Shirts! </h1>
      {shirtList.length > 0 ? shirtList.map(shirt => (
        <div className="shirt-card" key={shirt.id}>
          <img src={shirt.img} alt={shirt.desc} />
          <h3>{shirt.tshirt}</h3>
          <p>{shirt.desc}</p>
          <h4>Cost: ${shirt.price}</h4>
          <h5>Stock: {shirt.quantity > 0 ? shirt.quantity : <strong>Out of stock</strong>}</h5>
          <button onClick={() => buy(shirt.id)}>buy</button>
        </div>
      )
      ) : <h2>No shirts yet!</h2>}

    </div>
  )
}
