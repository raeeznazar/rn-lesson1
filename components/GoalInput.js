import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputhandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };

  const handleAddGoal = () => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/adaptive-icon.png')} />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputhandler}
          value={enteredGoalText}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancel} />
          </View>
        </View>
   
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    padding: 10,
  },
  button: {
    width: '40%',
    marginTop: 8,
    marginHorizontal: 8
  }, image: {
    width: 80,
    height: 80,
    margin: 20
  }
});

export default GoalInput;