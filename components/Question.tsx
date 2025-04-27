import { View, Text } from "react-native";

type QuestionProps = {
    english: string[];
    german: string[];
    selectedOptions: string | null;
}

export default function Question({ english, german, selectedOptions }: QuestionProps) {
    return (
        <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {english.map((word, index) => (
                    <Text key={index} style={{ margin: 4, fontSize: 16, color: '#FFFFFF' }}>
                        {word}
                    </Text>
                ))}
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {german.map((word, index) => (
                    <Text key={index} style={{  margin: 4, fontSize: 16,fontWeight: word === '____'&& selectedOptions ? 'bold' : 'normal',  color: '#FFFFFF' }}>
                        {word === '____' ? (selectedOptions || '____') : word}
                    </Text>
                ))}
            </View>
        </View>
    );

}