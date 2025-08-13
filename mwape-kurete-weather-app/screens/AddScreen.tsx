import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; //a lot of other cool pickers available rather than this one
import React, { useState } from "react";
import { Reading } from "../interface/Reading";
import { addReading } from "../services/FirestoreService";
import { Timestamp } from "firebase/firestore";

const AddScreen = () => {
  const [temperature, setTemp] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleCreation = async () => {
    var reading: Reading = {
      time: Timestamp.now(),
      temp: parseInt(temperature),
    };

    var success = await addReading(reading, selectedDay);
    // TODO: Create new reading for the specific day
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.inputField}
        selectedValue={selectedDay}
        onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
      >
        {/* TODO: Update to data from db */}
        <Picker.Item label="Monday" value="PCtG4GKoCtnYTvXH5Jid" />
        <Picker.Item label="Tuesday" value="ZKW3rM5VenG87UZEeQ4p" />
      </Picker>

      <TextInput
        style={styles.inputField}
        placeholder="Temperature"
        onChangeText={(newText) => setTemp(newText)}
        defaultValue={temperature}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreation}>
        <Text style={styles.buttonText}>Add Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputField: {
    borderWidth: 2,
    borderColor: "black",
    marginTop: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    textAlign: "center",
    padding: 15,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
