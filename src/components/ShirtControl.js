import React, { Component } from 'react'
import NewShirt from './NewShirt'
import ShirtList from './ShirtList'

export default class ShirtControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterShirtList: []
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
  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShirt onNewShirtCreation={this.onNewShirtCreation} />
      buttonText = "See some shirts"; // new code
    } else {
      currentlyVisibleState = <ShirtList shirtList={this.state.masterShirtList} buy={this.buy} />;
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
