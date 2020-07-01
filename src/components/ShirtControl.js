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
    console.log(newMasterShirtList);

    this.setState({
      masterShirtList: newMasterShirtList,
      formVisibleOnPage: false
    });
  }

  buy = (id) => {
    let boughtShirt = this.state.masterShirtList.find(shirt => shirt.id === id)
    console.log(boughtShirt)
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
