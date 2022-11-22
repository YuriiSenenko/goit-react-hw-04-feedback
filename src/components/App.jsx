import { useState } from 'react';
import { Title } from 'components/Section/Section';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

let total = 0;
let percentage = 0;

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = event => {
    switch (event.currentTarget.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = (good, neutrals, bad) => {
    total = good + neutrals + bad;
    return total;
  };

  return (
    <section>
      <Title>Please leave feedback</Title>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={increment}
      />

      <StatisticsTitle good={good} neutrals={neutral} bad={bad}>
        Statistics
      </StatisticsTitle>

      {countTotalFeedback(good, neutral, bad) === 0 ? (
        <Notification>There is no feedback</Notification>
      ) : (
        <Statistics
          good={good}
          neutrals={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      )}
    </section>
  );
}
