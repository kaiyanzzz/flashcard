import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

type AnswerProps = {
    options: string[];
    onPress: (option: string) => void;
};

export default function Ans({ options, onPress }: AnswerProps) {

    return (
        <View>
            {options.map((opt, idx) => (
                <TouchableOpacity onPress={() => onPress(opt)} key={idx} style={{ padding: 10, backgroundColor: '#eee', marginVertical: 4, borderRadius: 8 }}>
                    <Text style={{ color: '#3E6D82' }}>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

}