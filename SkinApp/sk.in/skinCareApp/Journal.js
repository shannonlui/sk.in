import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity,
  TouchableNativeFeedback, RecyclerViewBackedScrollView} from 'react-native';


class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://lit-gorge-31410.herokuapp.com/entries?userID=1", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        isLoading: false
      });
    })
    .done();
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProduct.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderProduct(entry) {
    var newDate = new Date(Date.parse(entry.date.slice(0, 19).replace(' ', 'T')));
    dateString = newDate.toUTCString().slice(0, 16);
    photo = entry.photolocation;
    console.log(photo);

    if (entry.photolocation == '' || entry.photolocation ==  null) {
      return (
        <TouchableNativeFeedback onPress={() => this.props.changeRoute(4, entry.id)}
        background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.row}>
            <View style={styles.entry}>
              <Text style={styles.date}>{dateString}</Text>
              <Text style={styles.text}>Rating: {entry.rating}</Text>
              <Text style={styles.text}>
                <Image source={require('./icons/ic_tag_small_red.png')} />  acne</Text>
              </View>
              <Image source={require('./icons/ic_photos4.png')} />
          </View>
        </TouchableNativeFeedback>
      );
    } else if (entry.photolocation == './icons/face.jpg') {
      console.log("got here");
      return (
        <TouchableNativeFeedback onPress={() => this.props.changeRoute(4, entry.id)}
        background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.row}>
            <View style={styles.entry}>
              <Text style={styles.date}>{dateString}</Text>
              <Text style={styles.text}>Rating: {entry.rating}</Text>
              <Text style={styles.text}>
                <Image source={require('./icons/ic_tag_small_red.png')} />  acne</Text>
              </View>
              <View>
                <Image style={styles.images} source={require('./icons/face.jpg')} />
              </View>
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableNativeFeedback onPress={() => this.props.changeRoute(4, entry.id)}
      background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <View style={styles.entry}>
            <Text style={styles.date}>{dateString}</Text>
            <Text style={styles.text}>Rating: {entry.rating}</Text>
            <Text style={styles.text}>
              <Image source={require('./icons/ic_tag_small_red.png')} />  acne</Text>
            </View>
            <View>
              <Image style={styles.images} source={require('./icons/face2.jpg')} />
            </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Text>Loading entries...</Text>
      </View>
    );
  }
}


export default class Journal extends Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <EntryList changeRoute={this.props.changeRoute}/>

        {/* Add Entry Button */}
        <TouchableOpacity onPress={this.props.changeRoute.bind(this, 3, null)}
        style={styles.touchableButton}>
          <Image source={require('./icons/ic_add_yellow.png')}/>
        </TouchableOpacity>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  row: {
    padding: 10,
    paddingRight: 15,
    //backgroundColor: '#F6F6F6',
    backgroundColor: '#FFF',
    marginTop: 4,
    marginBottom: 7,
    marginLeft: 9,
    marginRight: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  entry: {
    justifyContent: 'center',
    marginLeft: 15,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: '#222'
  },
  date: {
    fontSize: 16,
    flex: 1,
    color: '#222'
  },
  touchableButton: {
    bottom: 10,
    right: 10,
    width: 48,
    height: 48,
    position: 'absolute',
  },
  images: {
    width: 80,
    height: 100,
    resizeMode: 'contain'
  }
});
