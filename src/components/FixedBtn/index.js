import React      from 'react';
import { View }   from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

const FixedBtn = ({ onClick }) => (
  <View className="add-btn-component" onClick={onClick}>
    <AtIcon value="add" color="#E9E2F8" size="22" />
  </View>
);

export default FixedBtn
