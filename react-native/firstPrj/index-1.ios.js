// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//

// navigatorIOS

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry } from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {
            title: '跳转之后的页面'
          },
          barTintColor: 'cyan'
        }}
        style={{flex: 1}}
      />
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene ',
    });
  }

  render() {
    return (
      <View style={{backgroundColor: 'red', marginTop: 70}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('firstPrj', () => NavigatorIOSApp )

// react-navigation  需要进一步

// import {
//   StackNavigator
// } from 'react-navigation';
//
// const App = StackNavigator({
//   Main: {
//     screen: MainScreen
//   },
//   Profile: {
//     screen: ProfileScreen
//   }
// })
//
// export default class ProfileScreen extends React.Component {
//   static navigatorOptions = {
//     title: 'Welcome'
//   };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', { name: 'Jane' })}
//       />
//     )
//   }
// }
//
// export default class MainScreen extends React.Component {
//   static navigatorOptions = {
//     title: 'Welcome'
//   };
//
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', { name: 'Jane' })}
//       />
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj', () => MainScreen);


// SectionList demo - - 通讯录

// import React,{ Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   SectionList,
//   Dimensions
// } from 'react-native';
//
// const dimension = Dimensions.get('window');
//
// export default class sectionList extends Component {
//   componentDidMount() {
//
//   }
//
//   _renderSectionHeader(info){
//
//         var txt = '第' + info.section.key + '部分';
//         return(
//             <View><Text key={info.section.key} style={{width:dimension.width,height:52,textAlign: 'center',backgroundColor:'#21c6cd',color:'#fff'}}>{txt}</Text></View>
//         )
//       }
//
//   _renderItem(data){
//
//     return(
//         <View>
//           <Text key={data.item.title}>{data.item.name}</Text>
//           <Text>{data.item.phone}</Text>
//         </View>
//     )
//   }
//   _separatorComponent(){
//       return(
//           <View style={{height:4,width:'100%',backgroundColor:'orange'}}></View>
//       )
//   }
//
//   render() {
//     const sections = [];
//
//     // 构造数据
//     for (var i = 0; i < 10; i++) {
//       let datas = [];
//       for (let j = 0; j<10; j++) {
//         datas.push({
//           name: '用户' + i + j,
//           phone: '01234567890'
//         });
//       }
//       sections.push({
//         key: i,
//         data: datas
//       })
//     }
//
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={sections}
//           renderItem={this._renderItem}
//           renderSectionHeader={this._renderSectionHeader}
//           refreshing={false}
//           onRefresh={() => {alert("刷新")}}
//           ItemSeparatorComponent={this._separatorComponent}
//           SectionSeparatorComponemt={() => <View style={{height: 20, backgroundColor: 'blue'}}></View>}
//           keyExtractor={(item,index) => ("index" + index + item)}
//           onEndReached={(info) => {alert('到达底部')}}
//           onEndReachedThreshold={0}
//           stickySectionHeadersEnabled={true}
//           ListHeaderComponent={()=><View style={{backgroundColor:'yellow',alignItems: 'center'}}><Text>SectionList简易通讯录</Text></View>}
//           ListFooterComponent={()=><View style={{backgroundColor:'red',alignItems: 'center'}}><Text>SectionList简易通讯录尾部</Text></View>}
//         />
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 14,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('firstPrj', () => sectionList);

// SectionList

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   SectionList,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
//
// class SectionListBasics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textList: [{
//         title: 'D',
//         data: ['Devin']
//       },{
//         title: 'J',
//         data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'Jonn', 'Julie']
//       }]
//     }
//   }
//
//   _renderItem({item}) {
//     return (
//       <Text style={styles.item}>{item}</Text>
//     )
//   }
//
//   _renderSectionHeader({section}) {
//     return (
//       <Text style={styles.sectionHeader}>{section.title}</Text>
//     )
//   }
//
//   render() {
//     return(
//       <View>
//         <SectionList
//           sections={this.state.textList}
//           renderItem={this._renderItem}
//           renderSectionHeader={this._renderSectionHeader}
//         />
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 22
//     },
//     sectionHeader: {
//       paddingTop: 2,
//       paddingLeft: 10,
//       paddingRight: 10,
//       paddingBottom: 2,
//       fontSize: 14,
//       color: 'red',
//       fontWeight: 'bold',
//       backgroundColor: 'rgba(247,247,247,1.0)'
//     },
//     item: {
//       padding: 10,
//       fontSize: 18,
//       height: 44
//     }
// })
//
// AppRegistry.registerComponent('firstPrj', () => SectionListBasics)

//flatList
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   FlatList,
//   Image,
//   View,
//   StyleSheet,
//   Text
// } from 'react-native';
//
// class FlatListBasics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgList:[{
//           key: '第一张图片',
//           uri: require('./img/1.jpg')
//         },{
//           key: '第二张图片',
//           uri: require('./img/2.jpg')
//         },{
//           key: '第三张图片',
//           uri: require('./img/3.jpg')
//         },{
//           key: '第四张图片',
//           uri: require('./img/4.jpg')
//         },{
//           key: '第五张图片',
//           uri: require('./img/5.jpg')
//       }]
//     }
//   }
//
//   _renderItem({item}) {
//     return(
//       <Image source={item.uri} alt={item.key} style={styles.item} alt={item.key}/>
//     )
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.imgList}
//           renderItem={this._renderItem}
//           // renderItem={({item}) => <Image source={item.uri} alt={item.key} style={styles.item} />}
//         />
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     // width: '100%'
//     width: '100%',
//     // fontSize: 20
//   }
// })
//
// AppRegistry.registerComponent('firstPrj', () => FlatListBasics)

// ScrollView

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   ScrollView,
//   Image,
//   Text,
//   View
// } from 'react-native';
//
// class IScrollDownAndWhatHappenedNextShockedMe extends Component {
//   render(){
//     return (
//       <ScrollView>
//         <Text style={{fontSize: 30}}>Scroll me plz</Text>
//         <Image source={require('./img/1.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/2.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/3.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/4.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/5.jpg')} style={{width: '100%'}}/>
//         <Text style={{fontSize: 30}}>if you like</Text>
//         <Image source={require('./img/1.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/2.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/3.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/4.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/5.jpg')} style={{width: '100%'}}/>
//         <Text style={{fontSize: 30}}>scrolling down</Text>
//         <Image source={require('./img/1.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/2.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/3.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/4.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/5.jpg')} style={{width: '100%'}}/>
//         <Text style={{fontSize: 30}}>what's the best</Text>
//         <Image source={require('./img/1.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/2.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/3.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/4.jpg')} style={{width: '100%'}}/>
//         <Image source={require('./img/5.jpg')} style={{width: '100%'}}/>
//         <Text style={{fontSize: 30}}>React-Native</Text>
//       </ScrollView>
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj', () => IScrollDownAndWhatHappenedNextShockedMe)

//myself 6

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   View,
//   Text,
//   TextInput
// } from 'react-native';
//
// class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ''
//     }
//   };
//
//   changeText(text) {
//     this.setState({
//       text: text
//     })
//   }
//
//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="type here to translate!"
//           onChangeText={(text) => this.changeText(text)}
//         />
//       <Text
//         style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && "🍉").join(' ')}
//           {this.state.text }
//         </Text>
//       </View>
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj', () => PizzaTranslator)


//myself5
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   View
// } from 'react-native';
//
// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex:1, justifyContent: 'space-around', flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
//       <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
//       </View>
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj', () => FlexDimensionsBasics)

//myself4

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';
//
// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
//       <View style={{flex: 2, backgroundColor: 'skyblue'}}></View>
//     <View style={{flex: 3, backgroundColor: 'steelblue'}}></View>
//       </View>
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj',() => FlexDimensionsBasics)


//myself3

// import React,{ Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class LotsStyles extends Component {
//   render () {
//     return(
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'steelblue',
//     fontWeight: 'bold',
//     fontSize: 30
//   },
//   red: {
//     color: 'red'
//   }
// })
//
// AppRegistry.registerComponent('firstPrj', () => LotsStyles)

//myself 2

// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   AppRegistry
// } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showText: true
//     }
//     setInterval(() => {
//       this.setState(previousState => {
//         return {
//           showText: !previousState.showText
//         }
//       })
//     },1000)
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : '';
//     return(
//       <Text>
//         {display}
//       </Text>
//     )
//   }
// }
//
// class BlinkApp extends Component {
//   render(){
//     return (
//       <View>
//         <Blink text='I love to blink'></Blink>
//         <Blink text='Yes blinking is so great'></Blink>
//         <Blink text='Why did they ever tabke this out of HTML'></Blink>
//         <Blink text='Look at me'></Blink>
//       <Image source={require('./img/1.jpg')} style={{width: '100%',height: '80%'}}/>
//       </View>
//     )
//   }
// }
//
// AppRegistry.registerComponent('firstPrj',() => BlinkApp)
//


//系统自带的
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class firstPrj extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text>欢迎来到 React-Native</Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('firstPrj', () => firstPrj);



// myself 1
// import React, { Component } from 'react';
// import { AppRegistry, Text, View, StyleSheet, Image } from 'react-native';
//
// class SayHello extends Component {
//   render() {
//     return (
//       <Text>
//         Hello {this.props.name}
//       </Text>
//     )
//   }
// }
//
// class HelloWorld extends Component {
//   render() {
//     let pic = require('./img/1.jpg')
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>
//           Hello World!
//         </Text>
//         <SayHello name='Jone'></SayHello>
//         <Image source={pic} resizeMode='stretch' style={{height: '80%', width: '100%'}}/>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: 'cyan',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: '600'
//   }
// })
//
// AppRegistry.registerComponent('firstPrj', () => HelloWorld);
