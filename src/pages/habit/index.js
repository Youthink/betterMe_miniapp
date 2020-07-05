import React, { useState }                                               from 'react';
import { View, Button, Text, Radio, Label, Form, Input, Picker }         from '@tarojs/components'
import { AtIcon, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import './index.scss';

const colorArr = [
  'Blueviolet',
  'Coral',
  'Cadetblue',
  'Cornflowerblue',
  'Darkseagreen',
  'Darkorchid',
  'Darkcyan',
  'Deeppink',
  'Deepskyblue',
  'Dodgerblue',
  'Goldenrod',
  'Hotpink',
  'indianred',
  'Limegreen',
  'Lightsalmon',
  'Lightseagreen',
  'Mediumaquamarine',
  'Mediumorchid',
  'Mediumpurple',
  'Mediumseagreen',
  'Mediumslateblue',
  'yellowgreen'
]

const habitList = [
  { id: 1, name: '💤 午休', score: 2, maxContinueDays: 14 },
  { id: 2, name: '🍔 吃早餐', score: 3, maxContinueDays: 12 },
  { id: 3, name: '🛌 早睡', score: 4, maxContinueDays: 54 },
  { id: 4, name: '☀️ 早起', score: 5, maxContinueDays: 114 },
  { id: 5, name: '🐱 铲猫屎', score: 6, maxContinueDays: 1 },
];

export default () => {
  const [showAddHabit, setShowAddHabit] = useState(false);

  const multiArray =  [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']];
  const renderHabitList = (lists, type) => {
    if (!Array.isArray(lists)) {
      return null
    }

    const title = type === 'init' ? '未完成的习惯' : '已完成的习惯';
    const action = type === 'init' ? '' : 'CANCEL';
    const iconType = type === 'completed' ? 'check' : 'check-circle';
    return (
      <View className="habits">
        <Text class="status-title">{`${title}（${lists.length || 0} 个）${type === 'init' && '(预计可获得 400 金币)'}`}</Text>
        <View className="habit-list">
          {lists.map(o => {
            return (
              <View
                key={o.id}
                onClick={() => {}}
                style={{ background: colorArr[o.id] }}
              >
                <View className="habit-info">
                  <Text className="name">{o.name}</Text>
                  <Text className="score">{o.score}分</Text>
                </View>
                {o.maxContinueDays &&
                <Text className="bg-num">
                  {o.maxContinueDays}
                  <Text>连续天数</Text>
                </Text>
                }
                <View className="operation-btn">
                  <AtIcon
                    value={iconType}
                    color="rgba(255, 255, 255, .8)"
                    size="25"
                  />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }

  const addHabit = e => {
    if (e.detail.index === 0) {
      return setShowAddHabit(false);
    }
  }



  return (
    <View className="habit-page">
      <View className="header">
        共 4000 金币  去使用
      </View>
      <View className="add-habit-btn" onClick={() => setShowAddHabit(true)}>
        <AtIcon
          value="add"
          color="rgba(0, 0, 0, .6)"
          size="22"
        />
      </View>
      <View className="view-scroll-y habits-container">
        {renderHabitList(habitList, 'init')}
        {renderHabitList(habitList, 'completed')}
      </View>

      <AtModal isOpened={showAddHabit}>
        <AtModalHeader>添加习惯</AtModalHeader>
        <AtModalContent>
          <Form>
            <Input />
            <Label className="radio">
              <Radio value="r1" checked="true"/>简单
            </Label>
            <Label className="radio">
              <Radio value="r2" />一般
            </Label>
            <Label className="radio">
              <Radio value="r2" />困难
            </Label>
          </Form>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => setShowAddHabit(false)}>取消</Button>
          <Button onClick={addHabit}>添加</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
};
