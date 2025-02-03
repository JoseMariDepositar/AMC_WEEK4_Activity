import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
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
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Morning routine - Eating breakfast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Morning routine - Taking shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Morning routine - Getting ready',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Aftertnoon - eating lunch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - Working on computer',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - Eating snacks',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - Taking a rest after work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - going back to work.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - taking out the trash',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - washing dishes.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - Buying some frozen food in the market',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'AFternoon - Going back to work.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Afternoon - Drinking coffee',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - Cooking food',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - Eating dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - Washing dishes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - Taking a shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - going back to work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - going to evening Meetings',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening - Checking Emails',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Midnight - Working some more.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Midnight - Sleep',
  },
  
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;