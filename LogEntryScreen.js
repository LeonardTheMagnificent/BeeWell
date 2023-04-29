import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';


const emotions = [
  { name: 'Bad', color: 'rgb(70,190,130)' },
  { name: 'Fearful', color: 'rgb(270,190,100)' },
  { name: 'Angry', color: 'rgb(255,80,80)' },
  { name: 'Disgusted', color: 'grey' },
  { name: 'Sad', color: 'rgb(90,180,235)' },
  { name: 'Happy', color: 'rgb(255,230,50)' },
  { name: 'Surprised', color: 'rgb(157,127,219)' },
];

const Options = [
  { label: 'L', value: 'low' },
  { label: 'M', value: 'medium' },
  { label: 'H', value: 'high' },
];

const EmotionPicker = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [sleepAmount, setSleepAmount] = useState('');
  const [mealAmount, setMealAmount] = useState('');
  const [phyAmount, setPhyAmount] = useState('');
  const [socAmount, setSocAmount] = useState('');
  const [relaxAmount, setRelaxAmount] = useState('');
  const [showEmotions, setShowEmotions] = useState(false);

  const handleSubmit = () => {
    console.log('Selected emotion:', selectedEmotion);
    console.log('Sleep amount:', sleepAmount);
    console.log('Meal Amount:', mealAmount);
    console.log('Physical Amount:', phyAmount);
    console.log('Social Amount:', socAmount);
    console.log('Relaxation Amount:', relaxAmount);
    setSelectedEmotion(null);
    setShowEmotions(false);
    Alert.alert(
      'Thank you!',
      'Your responses have been recorded.',);
    //alert("Submission Recieved!");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {selectedEmotion ? (
        <View>
          <Text style={{ marginBottom: 10 }}>
            How much sleep did you get last night?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
              marginBottom: 10,
            }}>
            {Options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor:
                    sleepAmount === option.value ? 'blue' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setSleepAmount(option.value)}>
                <Text
                  style={{
                    fontSize: 10,
                    color: sleepAmount === option.value ? 'white' : 'black',
                  }}>
                  {option.label.charAt(0)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ marginBottom: 10 }}>
            How much did you eat yesterday?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
              marginBottom: 10,
            }}>
            {Options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor:
                    mealAmount === option.value ? 'blue' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setMealAmount(option.value)}>
                <Text
                  style={{
                    fontSize: 10,
                    color: mealAmount === option.value ? 'white' : 'black',
                  }}>
                  {option.label.charAt(0)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ marginBottom: 10 }}>
            How much physical activity did you do yesterday?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
              marginBottom: 10,
            }}>
            {Options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor:
                    phyAmount === option.value ? 'blue' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setPhyAmount(option.value)}>
                <Text
                  style={{
                    fontSize: 10,
                    color: phyAmount === option.value ? 'white' : 'black',
                  }}>
                  {option.label.charAt(0)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ marginBottom: 10 }}>
            How much social interaction did you have yesterday?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
              marginBottom: 10,
            }}>
            {Options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor:
                    socAmount === option.value ? 'blue' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setSocAmount(option.value)}>
                <Text
                  style={{
                    fontSize: 10,
                    color: socAmount === option.value ? 'white' : 'black',
                  }}>
                  {option.label.charAt(0)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ marginBottom: 10 }}>
            How much relaxation did you have yesterday?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
              marginBottom: 10,
            }}>
            {Options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  backgroundColor:
                    relaxAmount === option.value ? 'blue' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setRelaxAmount(option.value)}>
                <Text
                  style={{
                    fontSize: 10,
                    color: relaxAmount === option.value ? 'white' : 'black',
                  }}>
                  {option.label.charAt(0)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedEmotion(null)}
            style={{ marginBottom: 10 }}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View>
            <Image source={require('../assets/Wheel.png')} style={{ width: 400, height: 400 }} />
          </View>
          <TouchableOpacity onPress={() => setShowEmotions(!showEmotions)}>
          <View style={{ 
            borderColor: 'black', 
            borderWidth: 1, 
            borderRadius: 10, 
            paddingVertical: 10, 
            paddingHorizontal: 20, 
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            Choose your mood
          </Text>
          </View>
          </TouchableOpacity>
          {showEmotions && (
            <>
              {emotions.map((emotion) => (
                <TouchableOpacity
                  key={emotion.name}
                  style={{
                    backgroundColor: emotion.color,
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setSelectedEmotion(emotion.name)}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{emotion.name}</Text>
                  </View>
                  <View
                    style={{ width: 10, height: 20, borderRadius: 10, backgroundColor: emotion.color }}
                  />
                </TouchableOpacity>
              ))}
            </>
          )}
        </>
      )}
    </View>
  );
};

export default EmotionPicker
