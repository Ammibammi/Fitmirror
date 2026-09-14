import { View, Text } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function AboutScreen() {
    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                About FitMirror
            </Text>

            <Text style={GlobalStyle.text}>
                FitMirror helps users save inspiration from previous outfits.
            </Text>
        </View>
    );
}