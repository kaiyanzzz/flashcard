import { ActivityIndicator, View, Text } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export default function Game() {
    const [questions,setQuestions] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, "questions"));
              const fetchedQuestions = querySnapshot.docs.map(doc => doc.data());
              setQuestions(fetchedQuestions);
            } catch (error) {
              console.error("Error fetching questions: ", error);
            } finally {
                setIsLoading(false);
            }
          };
      
          fetchQuestions();
        }, []);

        if (isLoading) {
            return (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#3E6D82" />
                <Text style={{ marginTop: 10, fontSize: 16 }}>Loading questions...</Text>
              </View>
            );
          }

          if (questions.length === index) {
            return (
                <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
                    <Text>Great job! You've finished all the flashcards!</Text>
                </View>
            );
        }

    return (
        <View>
            <Card 
            question={questions[index]}
            onContinue={() => setIndex((prev) => prev + 1)} />
        </View>
    );
}