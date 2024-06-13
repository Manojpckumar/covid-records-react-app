import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Statedata from './Statedata';

export default class India extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12 text-center pt-5 pb-5'>
                    <img src='https://www.worldometers.info/img/flags/small/tn_in-flag.gif' />
                    <h3>India</h3>
                </div>

                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className='text-center'>
                                    <Card.Title className='text-black'>Total Cases :</Card.Title>
                                    <h3>19,233</h3>
                                    <Card.Text className='text-black'>
                                       [Today : 256]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                   
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className='text-center'>
                                    <Card.Title className='text-black'>Active Cases :</Card.Title>
                                    <h3>19,233</h3>
                                    <Card.Text className='text-black'>
                                       [Today : 256]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className='text-center'>
                                    <Card.Title className='text-black'>Recovered Cases :</Card.Title>
                                    <h3>19,233</h3>
                                    <Card.Text className='text-black'>
                                       [Today : 256]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className='text-center'>
                                    <Card.Title className='text-black'>Death Cases :</Card.Title>
                                    <h3>19,233</h3>
                                    <Card.Text className='text-black'>
                                       [Today : 256]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='col-md-12 pt-3'>
                            <Statedata/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
