import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewShirt from './NewShirt'
import ShirtList from './ShirtList'


class ShirtControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    //  const { tshirt, price, img, desc, size, quantity, id } = newShirt
    const action = { type: "ADD_TSHIRT", ...newShirt }
    dispatch(action);
    this.setState({ formVisibleOnPage: false })
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
    const { dispatch } = this.props
    //  const { tshirt, price, img, desc, size, quantity, id } = newShirt
    const action = { type: "ADD_TSHIRT", ...shirtToEdit }
    dispatch(action);
    this.setState({ formVisibleOnPage: false, editing: false })
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
      currentlyVisibleState = <ShirtList shirtList={this.props.masterShirtList} buy={this.buy} stock={this.stock} handleDelete={this.handleDelete} handleEditClick={this.handleEditClick} />;
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
const mapStateToProps = state => {
  return { masterShirtList: state }
}
ShirtControl = connect(mapStateToProps)(ShirtControl)
export default ShirtControl