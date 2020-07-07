import React, { useState } from 'react'
import moneyIcon           from '@/assets/money.png'
import AddBtn              from '@/components/FixedBtn'

import {
  View, Button, Text, Radio,
  Label, Form, Input, Image
} from '@tarojs/components'

import {
  AtIcon, AtModal, AtModalHeader, AtModalContent,
  AtModalAction, AtInput, AtRate
} from 'taro-ui'

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

const dateOptions = [
  { value: 1, label: '周一' },
  { value: 2, label: '周二' },
  { value: 3, label: '周三' },
  { value: 4, label: '周四' },
  { value: 5, label: '周五' },
  { value: 6, label: '周六' },
  { value: 7, label: '周日' }
];

const habitLevel = ['简单', '一般', '困难'];

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
      <AddBtn onClick={() => setShowAddHabit(true)} />
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
        <AtModalContent className="form-edit-habit">
          <AtInput
            className="habit-name"
            name="habitName"
            title="习惯名称"
            type="text"
          />
          <View className="habit-level">
            <Text className="label">打卡难度</Text>
            <AtRate max={3} margin={30} />
            <Text className="desc">{habitLevel[0]}</Text>
          </View>
          <View className="habit-date">
            <Text className="label">打卡日</Text>
            <View className="checkbox-date">
              {dateOptions.map(o => (
                <View className="checkbox-item" key={o.value}>
                  {o.label}
                </View>
              ))}
            </View>
          </View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => setShowAddHabit(false)}>取消</Button>
          <Button onClick={addHabit}>添加</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
};
