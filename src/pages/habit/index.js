import * as React          from 'react';
import { View, Text }      from 'remax/wechat';
import { pickColorByName } from '@/utils/helper';
import './index.scss';


const habitList = [
  { id: 1, name: '💤 午休', score: 2, maxContinueDays: 14 },
  { id: 2, name: '🍔 吃早餐', score: 3, maxContinueDays: 12 },
  { id: 3, name: '🛌 早睡', score: 4, maxContinueDays: 54 },
  { id: 4, name: '☀️ 早起', score: 5, maxContinueDays: 114 },
  { id: 5, name: '🐱 铲猫屎', score: 6, maxContinueDays: 1 },
];

export default () => {
  const renderHabitList = (lists, type) => {
    if (!Array.isArray(lists)) {
      return null
    }
    const title = type === 'init' ? '未完成的习惯' : '已完成的习惯'
    const action = type === 'init' ? '' : 'CANCEL'
    const iconType = type === 'completed' ? 'check' : 'check-circle'
    return (
      <View className="habits">
        <Text class="status-title">{`${title}（${lists.length || 0} 个）`}</Text>
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
                <Text className="operation-btn">
                </Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <View className="habit-page">
      <View className="view-scroll-y habits-container">
        {renderHabitList(habitList, 'init')}
      </View>
    </View>
  );
};
