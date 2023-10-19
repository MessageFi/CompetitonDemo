import React from 'react'
import { Image, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnvelopePaperHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Competions = () => {
    return (
        <div className='competions'>
            <div className='nav'>
                <Link to='/'>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                        <p style={{ fontSize: '30px', marginRight: '10px' }}>Vote</p>
                        <EnvelopePaperHeartFill style={{ width: "25px", height: "25px" }} />
                    </div>
                </Link>
                <div style={{ display: 'flex', marginRight: '20px' }}>
                    <Link to='/competitions'>
                        <p style={{ fontSize: '30px', color: '#2c70f4', marginRight: '20px' }}>competitions</p>
                    </Link>
                    <ConnectButton />
                </div>

            </div>
            <div style={{ display: 'flex' }}>
                <Card style={{ width: '18rem', marginLeft: '50px' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4sPvxHepSWg-lkodct5SMVvhJoKVPN3b0Q&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>ETH HongKong</Card.Title>
                        <Card.Text>
                            A ETH Hackathon host in HongKong city
                        </Card.Text>
                        <p style={{ color: 'grey' }}>Site:<scan style={{ color: 'black' }}>HongKong</scan></p>
                        <p style={{ color: 'grey' }}>Time:<scan style={{ color: 'black' }}>10.13-10.16</scan></p>
                        <Button variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '30px' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4sPvxHepSWg-lkodct5SMVvhJoKVPN3b0Q&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>ETH HongKong</Card.Title>
                        <Card.Text>
                            A ETH Hackathon host in HongKong city
                        </Card.Text>
                        <p style={{ color: 'grey' }}>Site:<scan style={{ color: 'black' }}>HongKong</scan></p>
                        <p style={{ color: 'grey' }}>Time:<scan style={{ color: 'black' }}>10.13-10.16</scan></p>
                        <Button variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '30px' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4sPvxHepSWg-lkodct5SMVvhJoKVPN3b0Q&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>ETH HongKong</Card.Title>
                        <Card.Text>
                            A ETH Hackathon host in HongKong city
                        </Card.Text>
                        <p style={{ color: 'grey' }}>Site:<scan style={{ color: 'black' }}>HongKong</scan></p>
                        <p style={{ color: 'grey' }}>Time:<scan style={{ color: 'black' }}>10.13-10.16</scan></p>
                        <Button variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
            </div>
            <Link to='/create'>
                <Button style={{marginTop:'30px ' , marginLeft:'670px'}}>Create Hackthon</Button>
            </Link>
        </div>
    )
}

export default Competions