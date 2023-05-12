import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ visible, onAddGoal }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="목표 리스트" onChangeText={goalInputHandler} value={enteredGoalText} />
                <Button title="추가하기" onPress={addGoalHandler} />
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        marginRight: 8,
    },
});
