import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewShirt from './NewShirt'
import ShirtList from './ShirtList'


class ShirtControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editId: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props
    const action = {
      type: "TOGGLE_FORM"
    }
    dispatch(action)
  }

  // {...newShirt}={tshirt, price, img, desc, size, quantity}
  // let {tshirt, price, img, desc, size, quantity] = newShirt

  onNewShirtCreation = (newShirt) => {
    const { dispatch } = this.props
    //  const { tshirt, price, img, desc, size, quantity, id } = newShirt
    const action = { type: "ADD_TSHIRT", ...newShirt }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditClick = (id) => {
    const editId = id
    this.setState({ editing: true, editId });
  }

  buy = (id) => {
    const { dispatch } = this.props
    const action = {
      type: "BUY",
      id
    }
    dispatch(action)
  }

  stock = (id) => {
    const { dispatch } = this.props
    const action = {
      type: "STOCK",
      id
    }
    dispatch(action)
  }

  handleDelete = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_TSHIRT",
      id
    }
    dispatch(action)

  }


  handleEditingTicketInList = (shirtToEdit) => {
    this.setState({ editing: false })
    const { dispatch } = this.props
    const action = { type: "ADD_TSHIRT", ...shirtToEdit }
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log("====>", this.props)
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewShirt onNewShirtCreation={this.onNewShirtCreation} />
      buttonText = "cancel";
    } else if (this.state.editing) {
      currentlyVisibleState = <NewShirt handleEditingTicketInList={this.handleEditingTicketInList} editing={this.state.editing} id={this.state.editId} />
      buttonText = "cancel";
    } else {
      currentlyVisibleState = <ShirtList shirtList={this.props.masterShirtList} buy={this.buy} stock={this.stock} handleDelete={this.handleDelete} handleEditClick={this.handleEditClick} />;
      buttonText = "Add Shirt";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className={this.state.editing || this.props.formVisibleOnPage ? "delete" : "add"} onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterShirtList: state.masterShirtList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
ShirtControl = connect(mapStateToProps)(ShirtControl)
export default ShirtControl