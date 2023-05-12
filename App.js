//r을 빠르게 2번 치면 가상앱 새로고침
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const addGoalHandler = enteredGoalText => {
        setCourseGoals(prevGoals => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    };

    const deleteGoalHandler = id => {
        setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
    };

    return (
        <View style={styles.appContainer}>
            <Button title="목표 추가하기" color="#3378e0" onPress={startAddGoalHandler} />
            {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
            <View style={styles.goalContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalContainer: {
        flex: 5,
    },
});
