import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';

const data = [
  {
    id: '1',
    postTitle: 'Arkadaşlık İsteği',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'BesiktasKralDoctor',
    notifications: 'BesiktasKralDoctor seninle arkadaş olmak istiyor.',
    time: '10:00',
  },
  {
    id: '2',
    postTitle: 'Gollll!!',
    postImage: 'https://media.gelbura.com/photos/blog/6/cover-w720h0.jpg',
    userName: 'System Notification',
    notifications: 'Bjk 2-0 Karagumruk',
    time: '12:00',
  },
  {
    id: '3',
    postTitle: 'Ligde yükselme',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'Kartal Haber',
    notifications: 'Beşiktaş  ligde 4e yükseldi.',
    time: '15:00',
  },
  {
    id: '4',
    postTitle: 'Olumsuz Hava Koşulları',
    postImage:
      'https://help.apple.com/assets/63FFF4F425D106794D09CC92/63FFF4F525D106794D09CC99/tr_TR/dc7f8cdb406dc7704cccb5188ddc28c1.png',
    userName: 'Hava Istanbul',
    notifications: 'Olumsuz hava koşulları sebebiyle maç iptal edildi.',
    time: '20:00',
  },
  {
    id: '5',
    postTitle: 'Arkadaşlık İsteği',
    postImage: 'https://reactnative.dev/img/tiny_logo.png',
    userName: 'DoctorWho',
    notifications: 'DoctorWho seninle arkadaş olmak istiyor.',
    time: '01:00',
  },
  {
    id: '1',
    postTitle: 'Arkadaşlık İsteği',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'BesiktasKralDoctor',
    notifications: 'BesiktasKralDoctor seninle arkadaş olmak istiyor.',
    time: '10:00',
  },
  {
    id: '2',
    postTitle: 'Gollll!!',
    postImage: 'https://media.gelbura.com/photos/blog/6/cover-w720h0.jpg',
    userName: 'System Notification',
    notifications: 'Bjk 2-0 Karagumruk',
    time: '12:00',
  },
  {
    id: '3',
    postTitle: 'Ligde yükselme',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/150px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png',
    userName: 'Kartal Haber',
    notifications: 'Beşiktaş  ligde 4e yükseldi.',
    time: '15:00',
  },
  {
    id: '4',
    postTitle: 'Olumsuz Hava Koşulları',
    postImage:
      'https://help.apple.com/assets/63FFF4F425D106794D09CC92/63FFF4F525D106794D09CC99/tr_TR/dc7f8cdb406dc7704cccb5188ddc28c1.png',
    userName: 'Hava Istanbul',
    notifications: 'Olumsuz hava koşulları sebebiyle maç iptal edildi.',
    time: '20:00',
  },
  {
    id: '5',
    postTitle: 'Arkadaşlık İsteği',
    postImage: 'https://reactnative.dev/img/tiny_logo.png',
    userName: 'DoctorWho',
    notifications: 'DoctorWho seninle arkadaş olmak istiyor.',
    time: '01:00',
  },
];

const NotificationScreen = () => {
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });

    return (
      <View style={styles.deleteBox}>
        <Animated.Text style={{transform: [{scale: scale}]}}>
          Delete
        </Animated.Text>
      </View>
    );
  };
  const renderItem = item => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <Swipeable renderLeftActions={leftSwipe}>
          <View style={{margin: 5, borderRadius: 20, padding: 5}}>
            <TouchableOpacity>
              <View style={styles.container}>
                <View style={styles.headerImageView}>
                  <Image
                    style={styles.headerImage}
                    source={{uri: item.item.postImage}}
                  />
                </View>

                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item.item.userName}
                    </Text>
                    <View>
                      <Text style={{color: 'black', margin: 3}}>
                        {item.item.notifications}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                        left: 270,
                        bottom: 50,
                      }}>
                      {item.item.time}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 10,
    },
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  headerImageView: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  deleteBox: {
    justifyContent: 'center',
    width: 100,
    alignItems: 'center',
  },
});
