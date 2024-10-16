import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DonutDetail = ({ route, navigation }) => {
  const { donut } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Number(donut.price));

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * Number(donut.price));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * Number(donut.price));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
        source={require('../assets/icon_back.png')}
      />
      </TouchableOpacity>

      <Image source={{ uri: `${donut.image}.jpg` }} style={styles.image} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyBetween: 'center',
          gap: 100,
          marginBottom:20
        }}>
        <View>
          <Text style={styles.name}>{donut.name}</Text>
          <Text style={styles.description}>{donut.description}</Text>
        </View>
        <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 180,
        }}>
        <View>
          <Text style={styles.delivery}>Delivery in</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            30 min
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View >
        <Text style={{
        fontWeight:'bold',
        fontSize:20
      }}>Restaurants info</Text>
        <Text style={{
          fontSize:17,
          textAlign:'justify',
          color:'gray'
        }}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert(`Donut added to cart: ${quantity} items`)}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    color: 'gray',
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  delivery: {
    fontSize: 16,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#F1B000',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  quantityValue: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  addButton: {
    backgroundColor: '#F1B000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DonutDetail;
