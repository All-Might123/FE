import {Typography } from '@material-ui/core';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Header from '../component/layout/header';
function HomePage(props) {
    return (
        <div>
            <Header />
            <Container>
                <Row className='home-content'>
                    <Col md='8'>
                        <Typography color='red' variant="h4" component="h4">
                            Your company
                        </Typography>
                    </Col>
                    <Col md='4'>
                        <Button color='info' className='btn-add'>
                            + New
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;