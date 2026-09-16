import { View, Text, Image } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function HomeScreen({ navigation }) {
    return (
        <View style={GlobalStyle.homeContainer}>

            <Text style={GlobalStyle.logoText}>FITMIRROR</Text>

            <Text style={GlobalStyle.homeTitle}>
                Your wardrobe,
                remembered.
            </Text>

            <Text style={GlobalStyle.homeDescription}>
                Save the outfits you love and revisit them whenever
                you need inspiration.
            </Text>

            <Image
                source={require('../assets/outfit8.jpg')}
                style={GlobalStyle.homeImage}
            />

            <Text style={GlobalStyle.homeSubtitle}>
                Your style. Your archive.
            </Text>

            <Text style={GlobalStyle.homeSmallText}>
                Keep your favourite looks in one simple place.
            </Text>

            <View style={GlobalStyle.homeButtonContainer}>
                <ButtonComponent
                    title="View outfits"
                    type="primary"
                    onPress={() => navigation.navigate('Outfits')}
                />

                <ButtonComponent
                    title="About FitMirror"
                    type="secondary"
                    onPress={() => navigation.navigate('About')}
                />
            </View>

        </View>
    );
}