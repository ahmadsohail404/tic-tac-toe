//Winning logic of TicTacToe: https://www.youtube.com/watch?v=qU_gdQ1FvjM
import React, { useState } from 'react';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("Empty")

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("Empty", 0, 9)
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (
      itemArray[3] !== "Empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (
      itemArray[6] !== "Empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`)
    }
    else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (
      itemArray[1] !== "Empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`)
    }
    else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`)
    }
    else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`)
    }

  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }
    if (itemArray[itemNumber] === "Empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }
    else {
      return toast("already filled", { type: "error" })
    }
    checkIsWinner();
  };

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button
                color='success'
                block
                onClick={reloadGame}
              >Reload the game!</Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? "Cross" : "Circle"}'s Turn
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color="warning" >
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
