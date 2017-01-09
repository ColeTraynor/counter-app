import React, { Component } from 'react';
import { Image, View, Animated, Easing, StyleSheet } from 'react-native';
import Counter from "./counter";
import Login from "./login";
import CookieManager from 'react-native-cookies';

CookieManager.get('http://172.17.153.171:8082', (err, res) => {
  console.log("cookie", res);
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            spinValue: new Animated.Value(0),
        };
    }

    render() {
        const spin = this.state.spinValue.interpolate({
           inputRange: [0, 1],
           outputRange: ['0deg', '360deg']
        });

        const count = this.state.count;

        return (
            <Animated.View style={styles.container}>
                <Counter />
                <Animated.Image
                    style={{width: 250, height: 250, transform: [{rotate: spin}] }}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <Login />
            </Animated.View>
        );
    }

    componentDidMount () {
        this.spin()
    }

    spin () {
        this.state.spinValue.setValue(0);
        Animated.timing(
            this.state.spinValue,
          {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear
          }
        ).start(() => this.spin())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
    },

});

export default App;
