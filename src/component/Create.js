import React from 'react'
import { Image, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnvelopePaperHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { DatePicker, Space } from 'antd';
const Create = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className='create'>
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
      <Card
        bg='primary'
        style={{ width: '28rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <Card.Header style={{ fontSize: '20px' ,color:'white'}}>Create</Card.Header>
        <Card.Text >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
            <scan style={{ fontSize: '20px', color: 'white' }}>Name</scan>
            <input style={{ borderWidth: '0.1px', borderRadius: '20px' }}></input>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
            <scan style={{ fontSize: '20px', color: 'white' }}>Site</scan>
            <input style={{ borderWidth: '0.1px', borderRadius: '20px' }}></input>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
          <scan style={{ fontSize: '20px', color: 'white' }}>Start Time</scan>
          <Space direction="vertical" >
            <DatePicker onChange={onChange} />
          </Space>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
          <scan style={{ fontSize: '20px', color: 'white' }}>End Time</scan>
          <Space direction="vertical" >
            <DatePicker onChange={onChange} />
          </Space>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
          <scan style={{ fontSize: '20px', color: 'white' }}>Rewards</scan>
          <div>
          <input style={{ borderWidth: '0.1px', borderRadius: '20px' }}></input>
          <span style={{marginLeft:'5px'}}>U</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
          <scan style={{ fontSize: '20px', color: 'white' }}>Ticket Coin</scan>
          <input style={{ borderWidth: '0.1px', borderRadius: '20px' }}></input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
          <scan style={{ fontSize: '20px', color: 'white' }}>Reward Coin</scan>
          <input style={{ borderWidth: '0.1px', borderRadius: '20px' }}></input>
        </div>
        <Button variant='light' style={{margin:'20px 190px' , }}>Create</Button>
      </Card.Text>
    </Card >
    </div >
  )
}

export default Create