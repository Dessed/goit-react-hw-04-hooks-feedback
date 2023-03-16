import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';


export const ReviewsPage = () => {
    const [good, setGood] = useState (0);
    const [neutral, setNeutral] = useState (0);
    const [bad, setBad] = useState (0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);
    

    const onLeaveFeedback = (e) => {
        const {name} = e.currentTarget;
        
        switch (name) {
            case 'good':
                setGood(prevState => good + 1);
            break;

            case 'neutral':
                setNeutral(prevState => neutral + 1);
            break;

            case 'bad':
                setBad(prevState => bad + 1);
            break;

        default: 
            console.log(`Тип поля name - ${name} не обрабатывается`);
        }
        };


        useEffect(() => {
            setTotal (good + neutral + bad);

            setPercentage((good * 100) / total);

        }, [good, neutral, bad, total]);
       

        return ( 
            <>
            <Section title='Please leave feedback'>
                <FeedbackOptions names={['good', 'neutral', 'bad']} clickState={onLeaveFeedback}/>
            </Section>        

            <Section title='Statistics'>
                {total === 0 ?  
                <Notification messsage="There is no feedback"/> :
                <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={total} 
                countPositiveFeedbackPercentage={Math.round(percentage)}/>
                }
            </Section>
            </>
        );
};
