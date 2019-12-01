import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Avatar } from 'react-native-paper';
import Dashboard from "../screens/Dashboard"
import { logoutUser } from "../api/auth-api";

const Dashboard = () => (
  <Background>
     <Avatar.Text size={24} label="AE" />
    <Header>Abdelhalim Emara</Header>
    <Paragraph>
      Your account is ready! Tap on Get Started to proceed.
    </Paragraph>
    <Button mode="contained" onPress={() => this.props.navigation.navigate('Dashboard')}>
      Get Started
    </Button>
  </Background>
);

export default memo(Dashboard);
