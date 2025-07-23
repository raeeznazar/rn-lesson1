import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    // Logic to add a new goal will go here
    setCourseGoals(prevGoals => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }]); // Add the new goal to the list
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler(){
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  return (<>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color={'#5e0acc'} onPress={startAddGoalHandler} />

        <GoalInput visible={isModalVisible}
          addGoalHandler={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => { return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/> }} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});


