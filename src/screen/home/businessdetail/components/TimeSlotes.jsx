import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MyContext } from './ModalContextProvider';

const ServiceApp = () => {
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
      const { selectedTimeSlot, setSelectedTimeSlot } = React.useContext(MyContext);
      console.log(selectedTimeSlot)

  const generateTimeSlots = () => {
    const startTime = new Date();
    startTime.setHours(9, 0, 0); // Start at 9:00 AM

    const endTime = new Date();
    endTime.setHours(17, 0, 0); // End at 5:00 PM

    const timeSlots = [];
    const interval = 30; // 30 minutes interval

    let currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      const formattedTime = `${currentTime.getHours()}:${(currentTime.getMinutes() < 10 ? '0' : '') +
        currentTime.getMinutes()} ${currentTime.getHours() >= 12 ? 'PM' : 'AM'}`;

      timeSlots.push(formattedTime);

      currentTime.setMinutes(currentTime.getMinutes() + interval);
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  const renderTimeSlot = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeSlotContainer,
        selectedTimeSlot === item && styles.selectedTimeSlot,
      ]}
      onPress={() => setSelectedTimeSlot(item)}
    >
      <Text style={styles.timeSlotText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}
    className="mt-4">
      {/* <Text style={styles.headerText} className="mb-2">Select a Time Slot</Text> */}
      <View style={styles.timeSlotsContainer}>
        <FlatList
          data={timeSlots}
          renderItem={renderTimeSlot}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide scroll indicator
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
  },
  timeSlotContainer: {
    flex: 1,
    padding: 12, // Reduced padding
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  timeSlotText: {
    fontSize: 16,
    color: 'black', // Default text color
  },
  selectedTimeSlot: {
    backgroundColor: 'white', // Selected color as white
    borderColor: '#FF6584',
  },
});

export default ServiceApp;
