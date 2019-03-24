import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Address from './Address/Address';
import Button from 'react-bootstrap/Button';
import {generate} from 'randomstring';

class App extends Component {
  
    state = {
      key: generate(10),
      firstName:' ',
      lastName:' ',
      birthday: ' ',
      telephone: '',

      "addressBook": [
        {
          key: generate(10),
          FirstName: "Cathy",
          LastName: "Pierce",
          Birthday: "9/14/1996",
          Telephone: "200-910-8132"
        },
        {
          key: generate(10),
          FirstName: "Alfonso",
          LastName: "Cooley",
          Birthday: "8/10/1973",
          Telephone: "200-657-9362"
        },
        {
          key: generate(10),
          FirstName: "Victor",
          LastName: "Gordon",
          Birthday: "8/3/1970",
          Telephone: "200-661-9407"
        },
        {
          key: generate(10),
          FirstName: "Colleen",
          LastName: "Wright",
          Birthday: "10/28/1967",
          Telephone: "200-250-7949"
        },
        {
          key: generate(10),
          FirstName: "James",
          LastName: "Johnson",
          Birthday: "5/11/1972",
          Telephone: "200-645-3176"
        },
        {
          key: generate(10),
          FirstName: "Anna",
          LastName: "Reyes",
          Birthday: "9/10/1975",
          Telephone: "200-707-8670"
        }
      ]
    };

    addAddressHandler = (event) => {
      event.preventDefault();
      let newAddress= {
        key: generate(10),
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        Birthday: this.state.birthday,
        Telephone: this.state.telephone
      };
      this.setState({addressBook:[...this.state.addressBook, newAddress]});
    }

    closeAddressHandler = (key, e) => {
      let addresses = [...this.state.addressBook];
      let deleteAddress = addresses.findIndex((item)=>item.key===key);
      addresses.splice(deleteAddress, 1);
      this.setState({"addressBook": addresses});
    }

  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1>React Address Book</h1>
          </header>
          <Address 
          addressBook={this.state.addressBook}
          closer={this.closeAddressHandler}/>
          <h2>Add a new address:</h2>
          <Form className="text-left" onSubmit={this.addAddressHandler}>
            <Form.Group controlId="formAddressBook">
              <Form.Label>FirstName: </Form.Label>
              <Form.Control 
                type= "text"
                placeholder="Enter first name"
                onChange={(e) => this.setState({firstName: e.target.value})}/> <br />
              <Form.Label>LastName: </Form.Label>
              <Form.Control 
                type= "text"
                placeholder="Enter last name"
                onChange={(e) => this.setState({lastName: e.target.value})}/> <br />
              <Form.Label>Birthday: </Form.Label>
              <Form.Control 
                type= "text"
                placeholder="Enter birthday"
                onChange={(e) => this.setState({birthday: e.target.value})}/> <br />
              <Form.Label>Telephone: </Form.Label>
              <Form.Control 
                type= "text"
                placeholder="Enter telephone"
                onChange={(e) => this.setState({telephone: e.target.value})}/> <br />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Address
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
