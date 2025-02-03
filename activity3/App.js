import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, StatusBar, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Morning routine - Waking up',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Morning routine - Checking phone',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-1',
    title: 'Morning routine - Eating breakfast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-2',
    title: 'Morning routine - Taking shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-3',
    title: 'Morning routine - Getting ready',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-4',
    title: 'Afternoon - Eating lunch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-5',
    title: 'Afternoon - Working on computer',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-6',
    title: 'Afternoon - Eating snacks',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-7',
    title: 'Afternoon - Taking a rest after work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-8',
    title: 'Afternoon - Going back to work.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-9',
    title: 'Afternoon - Taking out the trash',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-10',
    title: 'Afternoon - Washing dishes.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-11',
    title: 'Afternoon - Buying some frozen food in the market',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-12',
    title: 'Afternoon - Going back to work.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-13',
    title: 'Afternoon - Drinking coffee',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-14',
    title: 'Evening - Cooking food',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-15',
    title: 'Evening - Eating dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-16',
    title: 'Evening - Washing dishes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-17',
    title: 'Evening - Taking a shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-18',
    title: 'Evening - Going back to work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-19',
    title: 'Evening - Going to evening meetings',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-20',
    title: 'Evening - Checking emails',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-21',
    title: 'Midnight - Working some more.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72-22',
    title: 'Midnight - Sleep',
  },
];

const COLORS = ['#f0960f', '#37474F', '#42d3b8', 'yellow', '#2a3f77', '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC', '#B0BEC5'];

const Item = ({title, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index}) => {
    const backgroundColor = COLORS[index % COLORS.length];
    const textColor = '#000000';

    return (
      <Item
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default App;
