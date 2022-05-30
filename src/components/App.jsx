import { useState } from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;

    return (good * 100) / totalFeedback;
  };

  const handleButton = (buttonName) => {
    switch (buttonName) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        throw new Error(`Cant refresh value of ${buttonName}`);
    }
  };

  return (
    <div className="container">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys(state)}
          handleButton={handleButton}
        />
      </Section>
      <Section>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            countPositivePercantage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
