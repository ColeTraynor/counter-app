import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { increment } from "../actions/CounterActions";


class Counter extends Component {

    render() {
        return (
            <Text style={styles.count} onPress={this.props.increment}>
                Count: {this.props.count}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    count: {
        color: "#61DAFB",
        top: -50,
        fontSize: 20,
        fontWeight: "600"
    }

});

function mapStateToProps(store) {
    return {
        count: store.main.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            dispatch(increment());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
