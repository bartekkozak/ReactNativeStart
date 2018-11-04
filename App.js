import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Image } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/beautiful-place.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: [
          ...prevState.places,
          { key: "" + Math.random(), name: placeName, image: placeImage }
        ]
        // this.setState(prevState => {
        //   return {
        //     places: prevState.places.concat(prevState.placeName),
        //     places: [...prevState.places, prevState.placeName]
        //   };
        // });
      };
    });
  };

  placeSelectHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };
  // placeDeletedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key;
  //       })
  //     };
  //   });
  //   // let listOfItems = this.state.places;
  //   // listOfItems.splice(index, 1);
  //   // this.setState({ places: listOfItems });
  // };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectHandler}
        />
        {/* <Image
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJl8Yjeh1dmjbqPydlg_39xKi65rmK1xL9wZr9_lRP4Evjv5S"
          }}
          style={{ height: 150, width: 150 }}
        /> */}
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
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

export default App;
