import React, { useState } from 'react';
import { SafeAreaView, Image } from 'components/core/';
import Camera from './Camera';

const CameraView = () => {
  const [image, setImage] = useState(null);

  return (
    <SafeAreaView>
      {image ?
        <Image source={{ uri: image.uri }} style={{ flex: 1 }} />
        :
        <Camera callback={(e) => {
          setImage({ ...e });
        }} />
      }
    </SafeAreaView >
  );
};

export default CameraView;
