import React from 'react'

export default function ShirtList(props) {
  const { shirtList, buy, stock, handleDelete, handleEditClick } = props

  return (
    <>
      <h1>Shirts! </h1>
      <div className="shirt-container">
        {Object.values(shirtList).map(shirt => (
          <div className="shirt-card" key={shirt.id}>
            <img src={shirt.img} alt={shirt.desc} />
            <div>
              <h3>{shirt.tshirt}</h3>
              <p className="desc"><strong>Description:</strong><br /> {shirt.desc}</p>
              <h4> <strong>Cost:</strong> ${shirt.price}</h4>
              <h5><strong>Stock:</strong> {shirt.quantity > 0 ? shirt.quantity : <strong>Out of stock</strong>}</h5>
            </div>
            <div className="buttons">
              {shirt.quantity > 0 ? <button className="buy" onClick={() => buy(shirt.id)}>buy</button> : <button className="buy" onClick={() => buy(shirt.id)} disabled>buy</button>}
              <button className="add" onClick={() => stock(shirt.id)}>Add Stock</button>
              <button className="delete" onClick={() => handleDelete(shirt.id)}>Delete</button>
              <button className="edit" onClick={() => handleEditClick(shirt.id)}>Edit</button>
            </div>
          </div>
        )
        )}

      </div>
    </>
  )
}
