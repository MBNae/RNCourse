import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.addContainer}>
            <View>
                <Text>목표 리스트</Text>
                <Button title="추가하기" />
            </View>
            <View>
                <Text>리스트 작성중...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addContainer: {
        padding: 50,
    },
});
