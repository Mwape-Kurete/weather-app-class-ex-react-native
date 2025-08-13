import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { getDayReading } from "../services/FirestoreService";
import { Reading } from "../interface/Reading";

const ReadingCard = (props: any) => {

  const [readings, setReadings] = useState<Reading[]>([]);

  // TODO: Setup Realtime Listening for the specific day's readings
  const { day } = props;

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = async() => {
    var r = await getDayReading(day.id);
    setReadings(r);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        <Feather name={day.icon} size={28} color="black" />
        {"  " + day.name + "  "}
        <Feather name={day.icon} size={28} color="black" />
      </Text>

      <View style={styles.readingsBlock}>
        {readings.map((item) => (
          <View style={styles.readingBubble} key={item.id}>
            <Text style={styles.readingText}>{item.temp}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReadingCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  readingsBlock: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
  },
  readingBubble: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  readingText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
