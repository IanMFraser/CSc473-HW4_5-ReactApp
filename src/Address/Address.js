import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Address = (props) => {

    let addressBook = [...props.addressBook];
    let listItems = addressBook.map((item)=>
            <ListGroup.Item key={item.key}>
                <Card className="bg-light border rounded">
                    <span key={item.key}
                        className="text-right"
                        onClick={props.closer.bind(null, item.key)}>{'\uD83D\uDDD1'}</span>
                        <Card.Body className="text-center">
                            <p>First Name: {item.FirstName}</p>
                            <p>Last Name: {item.LastName}</p>
                            <p>Birthday: {item.Birthday}</p>
                            <p>Phone Number: {item.Telephone}</p>
                        </Card.Body>
                </Card>
            </ListGroup.Item>)
    return listItems;
        
}

export default Address;