import { View, Text } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function AboutScreen() {
    return (
        <View style={GlobalStyle.aboutContainer}>

            <Text style={GlobalStyle.aboutSmallTitle}>
                ABOUT FITMIRROR
            </Text>

            <Text style={GlobalStyle.aboutTitle}>
                Inspiration from your own wardrobe.
            </Text>

            <Text style={GlobalStyle.aboutText}>
                FitMirror is a simple digital wardrobe designed to help
                you remember outfits you already love.
            </Text>

            <View style={GlobalStyle.aboutBox}>
                <Text style={GlobalStyle.aboutBoxTitle}>
                    Save inspiration
                </Text>

                <Text style={GlobalStyle.aboutBoxText}>
                    Keep your favourite outfits together and use them
                    as inspiration when deciding what to wear.
                </Text>
            </View>

            <View style={GlobalStyle.aboutBox}>
                <Text style={GlobalStyle.aboutBoxTitle}>
                    Rediscover your style
                </Text>

                <Text style={GlobalStyle.aboutBoxText}>
                    Look back at previous outfits instead of starting
                    from scratch every time.
                </Text>
            </View>

            <Text style={GlobalStyle.aboutQuote}>
                Wear what you already love.
            </Text>

        </View>
    );
}