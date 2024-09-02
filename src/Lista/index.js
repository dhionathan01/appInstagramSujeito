import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
        };
    }
    render() {
        return (
            <View>
                <Text> Lista</Text>
            </View>
        );
    }
}
