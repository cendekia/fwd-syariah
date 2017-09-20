import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Title,
  Badge,
  Right
} from "native-base";

import { Col, Row, Grid } from 'react-native-easy-grid';
import Header from '../components/headers/DefaultHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header
      title="FWD Life"
      subTitle="Syariah"
      {...this.props}
    />,
  };

  render() {
    props = this.props;

    return (
      <Container>
        <Content style={{margin: 8}}>
          <Row>
            <Card>
                <CardItem style={{ backgroundColor: "lightseagreen" }}>
                  <Body>
                    <Title style={{ fontSize: 20, color: "#fff" }}>Total Asset Syariah</Title>
                    <Text style={{ fontSize: 14, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 50, color: "#fff", alignSelf: 'flex-end' }}>
                      26.598
                      <Text style={{ fontSize: 14, color: "#fff" }}>Mio</Text>
                    </Text>

                  </Body>
                </CardItem>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardItem style={{ backgroundColor: "#0082be" }}>
                  <Body>
                    <Title style={{ fontSize: 16, color: "#fff" }}>SBSN</Title>
                    <Text style={{ fontSize: 12, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 25, color: "#fff", alignSelf: 'flex-end' }}>
                      15.000
                      <Text style={{ fontSize: 12, color: "#fff" }}>Mio</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem style={{ backgroundColor: "#EC644B" }}>
                  <Body>
                    <Title style={{ fontSize: 16, color: "#fff" }}>Rasio Solvabilitas</Title>
                    <Text style={{ fontSize: 12, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 25, color: "#fff", alignSelf: 'flex-end' }}>
                      48
                      <Text style={{ fontSize: 12, color: "#fff" }}>%</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardItem style={{ backgroundColor: "#f65e1b" }}>
                  <Body>
                    <Title style={{ fontSize: 12, color: "#fff" }}>Fee (Ujrah)</Title>
                    <Text style={{ fontSize: 7, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 15, color: "#fff", alignSelf: 'flex-end' }}>
                      15.000
                      <Text style={{ fontSize: 7, color: "#fff" }}>Mio</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem style={{ backgroundColor: "#fbbf15" }}>
                  <Body>
                    <Title style={{ fontSize: 12, color: "#fff" }}>Dana Peserta</Title>
                    <Text style={{ fontSize: 7, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 15, color: "#fff", alignSelf: 'flex-end' }}>
                      9.142
                      <Text style={{ fontSize: 7, color: "#fff" }}>Mio</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem style={{ backgroundColor: "#999" }}>
                  <Body>
                    <Title style={{ fontSize: 12, color: "#fff" }}>Utang Lain</Title>
                    <Text style={{ fontSize: 7, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 15, color: "#fff", alignSelf: 'flex-end' }}>
                      2.456
                      <Text style={{ fontSize: 7, color: "#fff" }}>Mio</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
          </Row>
          <Row>
            <Card>
              <CardItem style={{ backgroundColor: "#12afc0" }}>
                <Body>
                  <Title style={{ fontSize: 20, color: "#fff" }}>Reksa Dana Syariah</Title>
                  <Text style={{ fontSize: 14, color: "#fff" }}>IDR</Text>
                  <Text style={{ fontSize: 50, color: "#fff", alignSelf: 'flex-end' }}>
                    9.239
                    <Text style={{ fontSize: 14, color: "#fff" }}>Mio</Text>
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Row>
          <Row>
            <Card>
                <CardItem style={{ backgroundColor: "#1b4143" }}>
                  <Body>
                    <Title style={{ fontSize: 20, color: "#fff" }}>Aktiva (Non Inventasi)</Title>
                    <Text style={{ fontSize: 14, color: "#fff" }}>IDR</Text>
                    <Text style={{ fontSize: 50, color: "#fff", alignSelf: 'flex-end' }}>
                      2.358
                      <Text style={{ fontSize: 14, color: "#fff" }}>Mio</Text>
                    </Text>
                  </Body>
                </CardItem>
            </Card>
          </Row>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
