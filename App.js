import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [total, setTotal] = useState("")
  const handlePressBtn = (val) => {
    if (val == "C") {
      setTotal("")
    }
    else if (val == "AC") {
      setTotal("")

    } else if (val == "=") {
      try {
        const result = eval(total)
        setTotal(String(result))

      } catch (error) {
        setTotal(error)
      }

    }
  }
  return (
    <SafeAreaView style={styles.main}>
      <TextInput showSoftInputOnFocus={false} editable={false} style={styles.screen} value={total}></TextInput>
      <View style={styles.button_row}>
        <TouchableOpacity style={styles.yellow_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("C")}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_text}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("AC")}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("/")}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("7")}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("9")}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("9")}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("*")}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("4")}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("5")}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("6")}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("+")}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("1")}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("2")}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("3")}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operator_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("-")}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_row}>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn(".")}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number_button}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("0")}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_btn}>
          <Text style={styles.button_text} onPress={() => handlePressBtn("=")}>=</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
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
