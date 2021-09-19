import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import CardCompany from '../component/Card';
import Header from '../component/layout/header';
import ModalAction from '../component/ModalAction';
import { ACTIONS } from '../component/constants';
import FormAction from '../component/Form';
function HomePage(props) {
  const [modal, setModal] = useState({
    title: '',
    open: false,
    body: '',
  });
  let dataForm = {
    name: null,
    backgroundImage: null,
  };
  const closeModal = () => {
    setModal({
      open: false,
    });
  };
  const { title, body, open } = modal;
  const createAction = (action, data) => {
    switch (action) {
      case ACTIONS.CREATE:
        setModal({
          body: (
            <FormAction
              structure={createFieldForm(dataForm)}
              titleSubmit="Create"
              dataForm={dataForm}
              submit={handleSubmit}
            ></FormAction>
          ),
          title: 'Create lesson',
          open: true,
        });
        break;
      case ACTIONS.EDIT:
        const { id, name } = data;
        dataForm = {
          id: id,
          name: name,
        };
        setModal({
          body: (
            <FormAction
              structure={createFieldForm(data)}
              titleSubmit="Update"
              dataForm={dataForm}
              submit={handleUpdate}
            ></FormAction>
          ),
          title: 'Update lesson',
          open: true,
        });
        break;
      default:
        break;
    }
  };
  const joinCompany = () => {
    setModal({
      body: (
        <FormAction
          structure={[
            {
              fill: 'code',
              type: 'text',
            },
          ]}
          titleSubmit="Join"
          dataForm={{ code: null }}
          submit={handleJoinCompany}
        ></FormAction>
      ),
      title: 'Update lesson',
      open: true,
    });
  };
  const createFieldForm = (data) => {
    const { name, backgroundImage } = data;
    const structure = [
      {
        fill: 'name',
        type: 'text',
        value: name,
      },
      {
        fill: 'backgroundImage',
        type: 'file',
        value: backgroundImage,
      },
    ];
    return structure;
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  const handleUpdate = (data) => {
    console.log(data);
  };
  const handleJoinCompany = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Header />
      <Container>
        <Row className="home-content">
          <Col md="8">
            <Typography color="red" variant="h4" component="h4">
              Your company
            </Typography>
          </Col>
          <Col md="4">
            <Button
              color="info"
              className="btn-add"
              onClick={() => createAction('create')}
            >
              + New
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <CardCompany
              name="All might"
              update={createAction}
              background="https://www.digitalconnectmag.com/wp-content/uploads/2019/09/pns-it-company-sonia-vihar-delhi-internet-website-developers-lxkqolgcqd.jpg"
            />
          </Col>
          <Col md="4">
            <CardCompany
              update={createAction}
              name="Technical strong"
              background="https://lh3.googleusercontent.com/proxy/SOQsxNTMdZnWHu5RKWyMmGnl8yvphD91ndqbqx39dUUO-3KWsEqN8IRSfpL5KGRPltUsZziC9VadqmCTuCKb"
            />
          </Col>
          <Col md="4">
            <CardCompany
              name="Logic company"
              update={createAction}
              background="https://tinlaw.vn/images/corporate/establishment-a-company.jpg"
            />
          </Col>
        </Row>
        <Row className="home-content">
          <Col md="8">
            <Typography color="red" variant="h4" component="h4">
              Participating companies
            </Typography>
          </Col>
          <Col md="4">
            <Button color="info" className="btn-add" onClick={joinCompany}>
              + Join
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <CardCompany
              name="SNLH"
              manager="Lê Sơn Nam"
              background="https://www.digitalconnectmag.com/wp-content/uploads/2019/09/pns-it-company-sonia-vihar-delhi-internet-website-developers-lxkqolgcqd.jpg"
            />
          </Col>
          <Col md="4">
            <CardCompany
              name="Better strong"
              manager="Nguyen Dinh Long"
              background="https://lh3.googleusercontent.com/proxy/SOQsxNTMdZnWHu5RKWyMmGnl8yvphD91ndqbqx39dUUO-3KWsEqN8IRSfpL5KGRPltUsZziC9VadqmCTuCKb"
            />
          </Col>
          <Col md="4">
            <CardCompany
              name="Gundam company"
              manager="Nguyen Ngoc Huy"
              background="https://tinlaw.vn/images/corporate/establishment-a-company.jpg"
            />
          </Col>
        </Row>
      </Container>
      <ModalAction
        open={open}
        body={body}
        title={title}
        close={closeModal}
      ></ModalAction>
    </div>
  );
}

export default HomePage;
