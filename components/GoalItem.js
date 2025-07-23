import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ text, id, onDeleteItem }) {
    return (
        <View key={id} style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#e68e8eff' }} onPress={() => onDeleteItem(id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 6,
    }, goalText: {
        padding: 8,
    }, pressedItem: {
        opacity: 0.5,
    }
});

export default GoalItem;

