import React, { useState }                               from 'react';
import { View, Text, Radio, Label, Form, Input, Picker } from 'remax/wechat';
import Icon                                              from 'weui-miniprogram/miniprogram_dist/icon/icon';
import Dialog                                            from 'weui-miniprogram/miniprogram_dist/dialog/dialog';
import Cells                                             from 'weui-miniprogram/miniprogram_dist/cells/cells';
import Cell                                              from 'weui-miniprogram/miniprogram_dist/cell/cell';
import './index.scss';

const habitList = [
  { id: 1, name: '💤 午休(精神小伙)', score: 2, maxContinueDays: 14 },
  { id: 2, name: '🍔 吃早餐(Let`s go!)', score: 3, maxContinueDays: 12 },
  { id: 3, name: '🛌 早睡(好作息的开始)', score: 4, maxContinueDays: 54 },
  { id: 4, name: '☀️ 早起', score: 5, maxContinueDays: 114 },
  { id: 5, name: '🐱 铲猫屎(喵喵)', score: 6, maxContinueDays: 1 },
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
    const iconType = type === 'completed' ? 'done' : 'done2';
    return (
      <View className="habits">
        <Text class="status-title">{`${title}（${lists.length || 0} 个）${type === 'init' && '(预计可获得 400 金币)'}`}</Text>
        <View className="habit-list">
          {lists.map(o => {
            return (
              <View
                key={o.id}
                onClick={() => {}}
                style={{ background: pickColorByName(o.name) }}
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
                  <Icon
                    icon={iconType}
                    color="rgba(255, 255, 255, .8)"
                    extClass="habit-check-icon"
                    type="outline"
                    size={25}
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
        <Icon
          icon="add"
          color="rgba(0, 0, 0, .6)"
          extClass="add-habit-icon"
          type="outline"
          size={22}
        />
      </View>
      <View className="view-scroll-y habits-container">
        {renderHabitList(habitList, 'init')}
        {renderHabitList(habitList, 'completed')}
      </View>
      <Dialog
        title="添加习惯"
        show={showAddHabit}
        bindbuttontap={addHabit}
        bindclose={() => setShowAddHabit(false)}
        buttons={[{text: '取消'}, {text: '添加'}]}
      >
        <Form>
          <Cells>
            <Cell title="习惯名称">
              <Input />
            </Cell>
            <Cell title="难度">
              <Label className="radio">
                <Radio value="r1" checked="true"/>简单
              </Label>
              <Label className="radio">
                <Radio value="r2" />一般
              </Label>
              <Label className="radio">
                <Radio value="r2" />困难
              </Label>
            </Cell>
            <Cell title="打卡日">
              <Picker mode='multiSelector' range={multiArray} />
            </Cell>
          </Cells>
        </Form>
      </Dialog>
    </View>
  );
};
