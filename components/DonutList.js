import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput
} from 'react-native';
import axios from 'axios';

const DonutList = ({ navigation }) => {
  const [donuts, setDonuts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Lưu trữ loại bánh được chọn
  const [loading, setLoading] = useState(true);

 
  const fetchDonuts = async (category) => {
    try {
      setLoading(true); 
      let apiUrl = 'https://64a67e6a096b3f0fcc7fe3e0.mockapi.io/donuts';
      if (category) {
        apiUrl += `?category=${category}`; 
      }

      const response = await axios.get(apiUrl);
      setDonuts(response.data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching donuts:', error);
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchDonuts(selectedCategory);
  }, [selectedCategory]);

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DonutDetail', { donut: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `${item.image}.jpg` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
           <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
         <Image
        style={styles.plusIcon} 
        source={require('../assets/plus_button.png')}
      />
      </View>
      
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Donuts</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={{
        fontWeight:'bold',
        color:'gray'
      }}>Welcome,Jala!</Text>
      <Text style={{
        fontWeight:'bold',
        fontSize:18
      }}>Choice your Best food</Text>
      </View>
      <View>
      <TextInput
      placeholder="Search food"
      
      style={{
        borderWidth:1,
        padding:13,
        borderColor:'gray',
        color:'gray',
        marginTop:20,
        marginBottom:20,
        width:250,
        fontWeight:'bold',
        borderRadius:5
      }}
      />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === '' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('')}>
          <Text style={styles.filterText}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'Pink Donut' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('Pink Donut')}>
          <Text style={styles.filterText}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'Floating' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('Floating')}>
          <Text style={styles.filterText}>Floating</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={donuts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#f5a623',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F4DDDD',
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative', 
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 40,
    height: 40,
    position: 'absolute', 
    bottom: 10, 
    right: 10,  
  },
});

export default DonutList;
