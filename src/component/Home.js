import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnvelopePaperHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './Vote.png'
import Card from 'react-bootstrap/Card';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead } from 'wagmi';
import ABI from '../erc20.json'
import CompetitionABI from '../competition.json'
const Banner = () => {
  const {data} = useContractRead(
    {
      address:'0x3fB51e5DFFe7194e7a768b9bbFeC4FC68235924E',
      abi:CompetitionABI,
      functionName:'create',
      args:['0x5300000000000000000000000000000000000004','0xFfd2eCE82f7959ae184D10fe17865d27B4f0FB94',[10000, 5000, 2000],]
    }
  )
  console.log(data);
  return (
    <div className='banner' >
        <div className='nav'>
            <Link to='/'>
            <div style={{display:'flex' , alignItems:'center' , marginLeft:'20px' }}>
                <p style={{fontSize:'30px' ,marginRight:'10px'}}>Vote</p>
                <EnvelopePaperHeartFill style={{width:"25px" ,height:"25px"}}/>
            </div>
            </Link>
            <div style={{display:'flex' , marginRight:'20px'}}>
            <Link to='/competitions'>
            <p style={{fontSize:'30px' , color:'#2c70f4' , marginRight:'20px'}}>competitions</p>
            </Link>
            <ConnectButton />
            </div>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between' , paddingLeft:'30px' , paddingRight:'30px'}}>
        <p className='tittle'>Vote<p style={{fontSize:'30px'}}>We provide an accessible underlying protocol for Hackathon</p></p>
        
        
        <Image src={Img} style={{width:'40vw' }} />
    </div >
    <p style={{textAlign:'center' , color:'#6e757c' , fontSize:'30px' , marginTop:'35px'}}>4 modes</p>
    <div style={{display:'flex' , marginLeft:'170px'}}>
    <Card
          className="mb-2"
          bg='secondary'
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
        bg='secondary'
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
        bg='secondary'
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
        bg='secondary'
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
    </div>
    
  )
}

export default Banner

