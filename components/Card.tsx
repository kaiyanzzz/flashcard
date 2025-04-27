import React from "react";
import { View } from "react-native";
import Question from "./Question";
import Answer from "./Answer";
import Result from "./Result";
import { QuestionType } from "./QuestionType";



type CardProps = {
    question: QuestionType;
    onContinue: () => void;
};

export default function Card({ question, onContinue }: CardProps) {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
    const [showResult, setShowResult] = React.useState<boolean>(false);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsCorrect(option === question.correct_answer);
        console.log(showResult);
        setShowResult(true);
        //might need to think about further logic issue;
    };

    const handleContinue = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setShowResult(false);
        onContinue();
    };

    
    return (
        <View style={{
            backgroundColor: '#3E6D82',
            marginHorizontal: 20,
            marginTop: 80,
            borderRadius: 20,
            padding: 20,
        }}>
            <Question english={question.english} german={question.german} selectedOptions = {selectedOption}/>
            <Answer options={question.options} onPress={handleSelect} />
            <Result correctAnswer={question.correct_answer} isCorrect={isCorrect} onContinue={handleContinue} showResult={showResult} />
        </View>
    );
}