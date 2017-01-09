import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions/CounterActions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }
    render() {

        return (
            <View>
                <TextInput
                    style={styles.text}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text onPress={() => this.props.login(this.state.text)}>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      width: 200,
      height: 40,
      borderColor: 'red',
      borderWidth: 1,
      color: "#61DAFB"
    }

});

function mapStateToProps(store) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username) => {
            dispatch(login(username));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
