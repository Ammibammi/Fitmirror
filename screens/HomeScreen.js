import { View, Text } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function HomeScreen({ navigation }) {
    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                FitMirror
            </Text>

            <Text style={GlobalStyle.text}>
                Save inspiration from your favourite outfits.
            </Text>

            <View style={GlobalStyle.buttonContainer}>
                <ButtonComponent
                    title="View outfits"
                    onPress={() => navigation.navigate('Outfits')}
                />

                <ButtonComponent
                    title="About FitMirror"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </View>
    );
}