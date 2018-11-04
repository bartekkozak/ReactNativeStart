import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: [...prevState.places, placeName]
        // this.setState(prevState => {
        //   return {
        //     places: prevState.places.concat(prevState.placeName),
        //     places: [...prevState.places, prevState.placeName]
        //   };
        // });
      };
    });
  };

  placeDeletedHandler = index => {
    // console.log(index);
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => {
    //       return i !== index;
    //     })
    //   };
    // });
    let listOfItems = this.state.places;
    listOfItems.splice(index, 1);
    this.setState({ places: listOfItems });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
