import React, { Component } from 'react'
import NewShirt from './NewShirt'
import ShirtList from './ShirtList'

export default class ShirtControl extends Component {
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


  onNewShirtCreation = (newShirt) => {
    const newMasterShirtList = this.state.masterShirtList.concat(newShirt);
    this.setState({
      masterShirtList: newMasterShirtList,
      formVisibleOnPage: false
    });
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
      buttonText = "See some shirts"; // new code
    } else if (this.state.editing) {
      currentlyVisibleState = <NewShirt handleEditingTicketInList={this.handleEditingTicketInList} editing={this.state.editing} id={this.state.editId} />
    } else {
      currentlyVisibleState = <ShirtList shirtList={this.state.masterShirtList} buy={this.buy} stock={this.stock} handleDelete={this.handleDelete} handleEditClick={this.handleEditClick} />;
      buttonText = "Add Shirt"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

// handleEditingTicketInList = (ticketToEdit) => {
//   const editedMasterTicketList = this.state.masterTicketList
//     .filter(ticket => ticket.id !== this.state.selectedTicket.id)
//     .concat(ticketToEdit);
//   this.setState({
//       masterTicketList: editedMasterTicketList,
//       editing: false,
//       selectedTicket: null
//     });
// }