import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Button
} from "native-base";
import Header from '../components/headers/DefaultHeader';
import { Ionicons } from '@expo/vector-icons';

export default class HelpScreen extends Component {
  static navigationOptions = {
    title: "Customer Care",
    header: <Header
      title="Customer Care"
      subTitle="FWD Life Sharia"
      {...this.props}
    />,
  };

  render() {
    return (
      <Container>
        <Content style={{margin: 8}}>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Apa itu FWD Life Sharia?
                </Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Ionicons name="ios-arrow-forward" size='20' />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Apakah yang dimaksud dengan 'tertanggung'?
                </Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Ionicons name="ios-arrow-forward" size='20' />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Apakah yang dimaksud dengan 'ahli waris'?
                </Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Ionicons name="ios-arrow-forward" size='20' />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Apakah yang dimaksud dengan 'pemegang polis'?
                </Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Ionicons name="ios-arrow-forward" size='20' />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Apa beda FWD Life Sharia dengan asuransi konvensional lainnya?
                </Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Ionicons name="ios-arrow-forward" size='20' />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
