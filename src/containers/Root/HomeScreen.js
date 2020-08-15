import React from 'react';
import { useDispatch } from 'react-redux';

import { BodySemiBold, Button, Page } from 'components/core/';
import ThemeActions from 'themes/Actions';


export default function CameraScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <Page>
      <BodySemiBold>Camera control tutorial</BodySemiBold>
      <Button title="Camera" onPress={() => navigation.navigate('CameraScreen')} />

      <BodySemiBold>Theme control tutorial</BodySemiBold>
      <Button title="Dark" onPress={() => {
        dispatch(ThemeActions.SetDark());
      }} />
    </Page>
  );
};