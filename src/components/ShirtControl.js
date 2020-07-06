import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewShirt from './NewShirt'
import ShirtList from './ShirtList'


class ShirtControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterShirtList: [],
      editing: false,
      editId: null
    };
  }

  handleClick = () => {
    this.setState(lastState => ({
      formVisibleOnPage: !lastState.formVisibleOnPage
    }));
  }

  // {...newShirt}={tshirt, price, img, desc, size, quantity}
  // let {tshirt, price, img, desc, size, quantity] = newShirt

  onNewShirtCreation = (newShirt) => {
    const { dispatch } = this.props
    const action = { type: "ADD_SHIRT", ...newShirt }
    dispatch(action);
    this.setState({ formVisibleOnPage: false })
  }

  handleEditClick = (id) => {
    this.setState({ editing: true, editId: id });
  }

  buy = (id) => {
    this.setState(state => {
      const masterShirtList = state.masterShirtList.map(element => {
        if (element.id === id && element.quantity > 0) {
          return { ...element, quantity: element.quantity - 1 }
        } else {
          return element
        }
      });
      return { masterShirtList }
    })
  }

  stock = (id) => {
    this.setState(state => {
      const masterShirtList = state.masterShirtList.map(element => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 10 }
        } else {
          return element
        }
      });
      return { masterShirtList }
    })
  }

  handleDelete = (id) => {
    const newMasterShirtList = this.state.masterShirtList.filter(shirt => shirt.id !== id)
    this.setState({ masterShirtList: newMasterShirtList })
  }


  handleEditingTicketInList = (shirtToEdit, id) => {
    const editedMasterShirtList = this.state.masterShirtList
      .filter(shirt => shirt.id !== id)
      .concat(shirtToEdit);
    this.setState({
      masterShirtList: editedMasterShirtList,
      editing: false,
      editId: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShirt onNewShirtCreation={this.onNewShirtCreation} />
      buttonText = "cancel"; // new code
    } else if (this.state.editing) {
      currentlyVisibleState = <NewShirt handleEditingTicketInList={this.handleEditingTicketInList} editing={this.state.editing} id={this.state.editId} />
      buttonText = "cancel";
    } else {
      currentlyVisibleState = <ShirtList shirtList={this.state.masterShirtList} buy={this.buy} stock={this.stock} handleDelete={this.handleDelete} handleEditClick={this.handleEditClick} />;
      buttonText = "Add Shirt"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className={this.state.editing || this.state.formVisibleOnPage ? "delete" : "add"} onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ShirtControl = connect()(ShirtControl)
export default ShirtControl