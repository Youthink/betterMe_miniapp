import React, { useState }                                               from 'react';
import { View, Button, Text, Radio, Label, Form, Input, Picker, Image }         from '@tarojs/components'
import { AtIcon, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import moneyIcon from '@/assets/money.png';
import './index.scss';

const colorArr = [
  'Darkorchid',
  // 'Blueviolet',
  'Coral',
  // 'Cadetblue',
  'Cornflowerblue',
  'Darkseagreen',
  // 'Darkcyan',
  // 'Deeppink',
  // 'Deepskyblue',
  'Dodgerblue',
  // 'Goldenrod',
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

    const title = type === 'init' ? '今日待完成' : type === 'all' ? '今日无需打卡' : '今日已打卡';
    const action = type === 'init' ? '' : 'CANCEL';
    const iconType = type === 'init' ? 'check-circle' : 'lightning-bolt';
    const habitBgColor = o => type === 'init' ? colorArr[o.id] : 'lightsteelblue';
    return (
      <View className="habits">
        <Text class="status-title">{`${title}（${lists.length || 0} 个）`}</Text>
        <View className="habit-list">
          {lists.map(o => {
            return (
              <View
                key={o.id}
                onClick={() => {}}
                style={{ background: habitBgColor(o) }}
              >
                <View className="habit-info">
                  <Text className="name">{o.name}</Text>
                  <Text className="score">{o.score}金币</Text>
                </View>
                {o.maxContinueDays &&
                <View className="bg-num">
                  {o.maxContinueDays}
                  <Text>连续天数</Text>
                </View>
                }
                <AtIcon
                  value={iconType}
                  color="rgba(255, 255, 255, .8)"
                  size="25"
                />
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
      <View className="add-habit-btn"
        onClick={() => setShowAddHabit(true)}
      >
        <AtIcon value="add" color="#E9E2F8" size="22" />
      </View>
      <View className="summary-money">
        <View className="item">
          <View className="total">
            4000
          </View>
          <View className="desc">
            <Text>累计金币</Text>
            <Image className="coin" src={moneyIcon} mode="widthFix" />
        </View>
        </View>
        <View className="item">
          <View className="total">200</View>
          <View className="desc">
            <Text>今日可获得</Text>
            <Image className="coin" src={moneyIcon} mode="widthFix" />
          </View>
        </View>
      </View>
      <View className="view-scroll-y habits-container">
        {renderHabitList(habitList, 'init')}
        {renderHabitList(habitList, 'completed')}
        {renderHabitList(habitList, 'all')}
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
