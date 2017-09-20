import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container } from "native-base";
import Header from '../components/headers/DefaultHeader';


export default class ProductsScreen extends Component {
  static navigationOptions = {
    header: <Header
      title="Products"
      subTitle="FWD Life Sharia"
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
