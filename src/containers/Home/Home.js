import React from 'react';
import { BodySemiBold, Button, Page, SafeAreaView } from 'components/core/';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Page>
        <BodySemiBold>Camera control tutorial</BodySemiBold>
        <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
      </Page>
    </SafeAreaView >
  );
};

export default Home;
