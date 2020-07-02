import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types"



export default function NewShirt(props) {
  function handleNewShirtform(event) {
    event.preventDefault();
    props.onNewShirtCreation(
      {
        tshirt: event.target.tshirt.value,
        desc: event.target.desc.value,
        img: event.target.img.value,
        price: event.target.price.value,
        size: event.target.size.value,
        quantity: event.target.quantity.value,
        id: v4()
      });
  }
  function handleShirtEdit(event, id) {
    event.preventDefault();
    props.handleEditingTicketInList(
      {
        tshirt: event.target.tshirt.value,
        desc: event.target.desc.value,
        img: event.target.img.value,
        price: event.target.price.value,
        size: event.target.size.value,
        quantity: event.target.quantity.value,
        id: id
      }, id);
  }
  return (
    <div className="form-container">
      <form className="shirt-form" onSubmit={props.editing ? ((event) => handleShirtEdit(event, props.id)) : handleNewShirtform}>
        <input type="text" name="tshirt" placeholder="Product name" />
        <input type="url" name="img" placeholder="Image link" />
        <textarea type="text" name="desc" placeholder="Product Description" />
        <input type="number" name="price" placeholder="Product Price" />
        <select name="size" id="tSize">
          <option value="l">L</option>
          <option value="m">M</option>
          <option value="s">S</option>
          <option value="xs">XS</option>
        </select>
        <input type="number" name="quantity" placeholder="Product Quantity" />
        {!props.editing ? <button className="add" type="submit">Add shirt</button> :
          <button className="edit" type="submit">edit</button>}
      </form>
    </div>
  )
}
NewShirt.propTypes = {
  onNewShirtCreation: PropTypes.func
};

// product name 
// Price 
// quantity
// size