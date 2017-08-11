// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Alert,
//   Image,
//   TextInput,
//   TouchableHight,
//   TouchableOpacity,
//   NavigatorIOS,
//   ScrollView,
// } from 'react-native';
//
// export default class ReactNativePrj extends Component {
//   render () {
//     return (
//       <NavigatorIOS
//         style={{flex: 1}}
//         initialRoute={{
//           component: ListPage,
//           title: '🙃首页'
//         }}
//       />
//     )
//   }
// }
//
//
// // 列表页
// class ListPage extends Component {
//
//   _gotoDetailPage () {
//     this.props.navigator.push({
//       component :DetailPage,
//       title: '订单详情',
//       rightButtonTitle: '购物车',
//       onRightButtonPress: function() {
//         alert('进入我的购物车')
//       }
//     })
//   }
//
//   render () {
//     return (
//       <ScrollView style={styles.flex}>
//         <Text style={styles.list_item} onPress={this._gotoDetailPage.bind(this)}>订单详情1</Text>
//         <Text style={styles.list_item} onPress={this._gotoDetailPage.bind(this)}>订单详情2</Text>
//         <Text style={styles.list_item} onPress={this._gotoDetailPage.bind(this)}>订单详情3</Text>
//       </ScrollView>
//     )
//   }
// }
//
//
// // 详情页
//
// class DetailPage extends Component {
//
//   _show (text) {
//     alert(text)
//   }
//
//   _handleBackButtonPress () {
//     this.props.navigator.pop();
//   }
//
//   render () {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={this._show.bind(this,'React-Native')}
//           activeOpacity={0.1}
//           >
//             <Text style={styles.item}>React-Native</Text>
//           </TouchableOpacity>
//
//           <TouchableOpacity
//             onPress={this._handleBackButtonPress.bind(this,'React-Native')}
//             >
//               <Text style={styles.item}>返回上一级</Text>
//             </TouchableOpacity>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:64
//   },
//   item:
//   {
//     fontSize:18,
//     marginLeft:5,
//     color:'#434343'
//   },
//   flex:{
//     flex: 1,
//   },
//   list_item:{
//     lineHeight:25,
//     fontSize:16,
//     marginLeft:10,
//     marginRight:10
//   }
// });
//
// AppRegistry.registerComponent('firstPrj', () => ReactNativePrj);

// import React, { Component, PropTypes } from 'react';
// import {
//   AppRegistry,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   NavigatorIOS,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableHight
// } from 'react-native';
//
// export default class NavigatorIOSComponent extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         style={{flex: 1}}
//         initialRoute={{
//           component: ListPage,
//           title: '🙄 首页'
//         }}
//     />)
//   }
// }
//
// class ListPage extends Component {
//
//   _gotoDetailPage(num) {
//     this.props.navigator.push({
//       component: DetailPage,
//       title: '😝 详情页' + num,
//       passProps: {
//         num: num
//       },
//       rightButtonTitle: '分享',
//       onRightButtonPress: function () {
//         alert('分享页面')
//       }
//     })
//   }
//
//   render() {
//     return (
//       <ScrollView style={styles.flex}>
//         <Image
//           source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//           style={{width: '100%', height: '100%'}} />
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,1)}>第一条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,2)}>第二条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,3)}>第三条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,4)}>第四条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,5)}>第五条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,6)}>第六条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,7)}>第七条数据</Text>
//         <Text style={styles.item} onPress={this._gotoDetailPage.bind(this,8)}>第八条数据</Text>
//       </ScrollView>
//     )
//   }
// }
//
// class DetailPage extends Component {
//   // static propTypes = {
//   //   num: PropTypes.string.isRequire,
//   // }
//   constructor (props) {
//     super(props);
//   }
//
//   _show (info) {
//     alert(info)
//   }
//
//   _goBack () {
//     this.props.navigator.pop()
//   }
//
//   render () {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={this._show.bind(this,'你点击了我')}
//           activeOpacity={0.2}
//           >
//             <Text style={styles.item}>ReactNativePrj { this.props.num } </Text>
//           </TouchableOpacity>
//
//           <TouchableOpacity
//             onPress={this._goBack.bind(this)}
//             >
//               <Text style={styles.item}>返回上一级页面</Text>
//             </TouchableOpacity>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   flex: {
//     flex: 1
//   },
//   container: {
//     flex: 1,
//     marginTop: 64
//   },
//   item: {
//     fontSize: 18,
//     marginLeft: 5,
//     color: 'cyan'
//   }
// })
//
// AppRegistry.registerComponent('firstPrj', () => NavigatorIOSComponent)



//  动画

import React,{ Component } from 'react';
import {
  Animated,
  AppRegistry,
  Text
} from 'react-native';

class FadeInView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.fadeAnim,
      {
          toValue: 1,
          duration: 2000
      }
    ).start()
  }

  render () {
    return (
      <Animated.View
        style={{...this.props.style, opacity: this.state.fadeAnim}}>
          {this.props.children}
        </Animated.View>
    )
  }

}

class AnimateView extends Component {
  render () {
    return (
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue', marginTop: 64}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}} >Fadeing ~~~in</Text>
      </FadeInView>
    )
  }
}

AppRegistry.registerComponent('firstPrj', () => AnimateView)
