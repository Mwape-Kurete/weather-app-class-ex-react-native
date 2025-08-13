import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ReadingCard from "../components/ReadingCard";
import { useNavigation } from "@react-navigation/native";
import { getAllDays } from "../services/FirestoreService";
import { Day } from "../interface/Days";

const ReadingScreen = () => {
  const navigation: any = useNavigation();
  const [days, setDays] = useState<Day[]>([]);

  // TODO: Get all Days
  var dummyReading = { name: "Monday", icon: "sun", id: "123456789" };

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = async () => {
    var allDays = await getAllDays();
    setDays(allDays);
  };
  return (
    <View style={styles.container}>
      <Button title="Add Reading" onPress={() => navigation.navigate("Add")} />
      {days.map((days) => (
        <ReadingCard key={days.id} day={days} />
      ))}
    </View>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
