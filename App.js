import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <TextInput style={styles.screen}></TextInput>
      <View style={styles.button_row}>
        <TouchableOpacity style={styles.yellow_button}>
          <Text style={styles.button_text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_text}>
          <Text style={styles.button_text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_btn}>
          <Text style={styles.button_text}>=</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    gap: 10
  },
  screen: {
    width: '100%',
    height: 200,
    color: 'white',
    textAlign: "right",
    fontSize: 34
  },
  button_row: {
    flexDirection: 'row',
    gap: 15,
    width: '90%'

  },
  yellow_button: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number_button: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operator_button: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',

  },
  back_text: {
    flex: 2,
    width: 180,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  other_text: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontSize: 35
  },
  back_btn: {
    flex: 2,
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',

  }
});
