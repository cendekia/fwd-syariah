import React, { Component } from 'react';
import { Container } from "native-base";
import Header from '../components/headers/DefaultHeader';

export default class HelpScreen extends Component {
  static navigationOptions = {
    title: "Customer Care",
    header: <Header
      title="Customer Care"
      subTitle="FWD Life Syariah"
      {...this.props}
    />,
  };

  render() {
    return (
      <Container>
      </Container>
    );
  }
}
