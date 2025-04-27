import { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

type ResultProps = {
  correctAnswer: string;
  isCorrect: boolean | null;
  onContinue: () => void;
  showResult: boolean;
};

export default function Result({ correctAnswer, isCorrect, onContinue, showResult }: ResultProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleContinue = () => {
    setChecked(false);
    onContinue();
  }

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      {!showResult ? (
        
        <TouchableOpacity
            onPress={onContinue}
            style={{
              backgroundColor: '#0BE2E9',
              paddingVertical: 16, 
              borderRadius: 8,
              alignItems: 'center',
              marginTop: 30,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
              Continue
            </Text>
          </TouchableOpacity>
      ) : !checked ? (
        
        <TouchableOpacity
            onPress={() => setChecked(true)}
            style={{
              backgroundColor: '#0BE2E9',
              paddingVertical: 16, 
              borderRadius: 8,
              alignItems: 'center',
              marginTop: 30,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
              CHECK ANSWER
            </Text>
          </TouchableOpacity>
      ) : (
        <View style={{ backgroundColor: isCorrect ? '#0BE2E9' : '#FF7F8B', padding: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}>
          <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16 }}>
            {isCorrect ? 'Correct!' : `Incorrect! The correct answer is ${correctAnswer}`}
          </Text>

          <TouchableOpacity
            onPress={handleContinue}
            style={{
              backgroundColor: '#FFFFFF',
              paddingVertical: 16, 
              borderRadius: 8,
              alignItems: 'center',
              marginTop: 30,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ color: isCorrect ? '#0BE2E9' : '#FF7F8B', fontSize: 18, fontWeight: 'bold' }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>

  );
}