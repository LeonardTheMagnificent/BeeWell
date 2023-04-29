import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState({});

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    
    Alert.alert(
      'Date: '+ selectedDate,
      'Emotion:         BAD\n------------\nSleeping:        LOW\nEating:            LOW\nActivity:          HIGH\nSocial:            HIGH\nRelaxation:    LOW')
    //alert("Submission Recieved!");
  }

  const handleNoteChange = (text) => {
    setNote(text);
  }

  const handleNoteSave = (date) => {
    setNotes({
      ...notes,
      [date]: note,
    });
    setNote('');
  }

  const today = new Date().toISOString().slice(0, 10);

  const markedDates = {
    [today]: {
      dotColor: 'black',
      dotOpacity: 1,
      fontWeight: 'bold',
      selected: selectedDate === '' || selectedDate === today,
    },
    ...Object.keys(notes).reduce((acc, date) => {
      acc[date] = {
        marked: true,
      };
      return acc;
    }, {})
  };

  if (selectedDate !== '' && selectedDate !== today) {
    markedDates[selectedDate] = {
      selected: true,
    };
  }

  return (
    <View style={styles.container}>
      <Calendar 
        onDayPress={(date) => handleDateSelect(date)} 
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: 'black',
          todayTextColor: 'black',
          todayFontWeight: 'bold',
          arrowColor: 'black',
          monthTextColor: 'black',
          textMonthFontSize: 50,
          textMonthFontWeight: 'bold',
        }}
        markedDates={markedDates}
      />
      <View style={styles.noteBox}>
        {selectedDate !== '' && (
          <>
            <TextInput 
              style={styles.noteInput} 
              placeholder="Add a note"
              onChangeText={(text) => handleNoteChange(text)}
              value={note}
            />
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={() => handleNoteSave(selectedDate)}>
              <Text style={styles.saveButtonText}>Save note</Text>
            </TouchableOpacity>
            {notes[selectedDate] && (
              <Text style={styles.noteText}>{notes[selectedDate]}</Text>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'black',
    height: 400,
    width: 400,
  },
  noteBox: {
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
  },
  noteInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noteText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
});
