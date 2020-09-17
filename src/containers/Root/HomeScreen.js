import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

import { BodySemiBold, Button, Page } from 'components/core/';
import {themeActions, SUPPORTED_THEMES} from 'themes';


export default function CameraScreen({ navigation }) {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  return (
    <Page>
      <BodySemiBold>Camera control tutorial</BodySemiBold>
      <Button title="Camera" onPress={() => navigation.navigate('CameraScreen')} />

      <BodySemiBold>Chart control tutorial</BodySemiBold>
      <Button title="Chart" onPress={() => navigation.navigate('CameraScreen')} />

      <BodySemiBold>Theme control tutorial</BodySemiBold>
      <Button title="Dark" onPress={() => {
        dispatch(themeContext.key === SUPPORTED_THEMES.LIGHT ? themeActions.setDark() : themeActions.setLight());
      }} />
    </Page>
  );
};