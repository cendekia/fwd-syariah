import React, { Component } from 'react';
import { STATUS_BAR_HEIGHT } from '../../constants/Layout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Button,
  StyleProvider
} from "native-base";
import { Platform } from 'react-native';

class DefaultHeader extends Component {
  defaultState = {
    showButton: true,
    action: () => alert("menu clicked"),
    style: {
      container: {
        height: Platform.OS ==='android' ? 25 : 45
      },
      iconName: "account",
      fontSize: 25,
      icon: {
        color: "#fff"
      }
    }
  };

  render() {
    function renderLeft(state) {
      if (state.showButton) {
        return <Left style={state.style}>{renderButton(state)}</Left>;
      } else {
        return <Left />;
      }
    }
    function renderButton(state) {
      return  <Button transparent onPress={state.action}>
                <Icon name={state.style.iconName} size={state.style.fontSize} style={state.style.icon} />
              </Button>;
    }

    return (
      <Header
        style={{
          height: Platform.OS ==='android' ? 54 + STATUS_BAR_HEIGHT : 65
        }}
        androidStatusBarColor="#ff8200"
        backgroundColor="#ff8200"
        iosBarStyle="light-content"
      >
        { !this.props.leftButton && renderLeft(this.defaultState)}
        { this.props.leftButton && renderLeft(this.props.leftButton)}

        <Body style={{ height: Platform.OS ==='android' ? 25 : 35 }}>
          <Title style={{ color: "#FFF" }}>{this.props.title}</Title>
          <Subtitle style={{ color: "#FFF" }}>{this.props.subTitle}</Subtitle>
        </Body>

        <Right />

      </Header>
    );
  }
}

export default DefaultHeader;
