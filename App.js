import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Image } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/beautiful-place.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    // this.setState(prevState => {
    //   return {
    //     places: [
    //       ...prevState.places,
    //       { key: "" + Math.random(), name: placeName, image: placeImage }
    //     ]
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat(prevState.placeName),
    //     places: [...prevState.places, prevState.placeName]
    //   };
    // });
    //   };
    // });
  };

  placeSelectHandler = key => {
    this.props.onSelectPlace(key);
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
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
    this.props.onDeletePlace;
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
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
          selectedPlace={this.props.selectedPlace}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
