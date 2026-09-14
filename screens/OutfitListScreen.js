import { View, Text, FlatList, Image } from 'react-native';

import { OUTFITS } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function OutfitListScreen() {
    return (
        <View style={GlobalStyle.listContainer}>

            <FlatList
                data={OUTFITS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={GlobalStyle.itemContainer}>

                            <Image
                                source={item.image}
                                style={GlobalStyle.outfitImage}
                                resizeMode="contain"
                            />

                            <Text style={GlobalStyle.itemText}>
                                {item.name}
                            </Text>

                            <Text style={GlobalStyle.itemDescription}>
                                {item.description}
                            </Text>

                        </View>
                    );
                }}
            />

        </View>
    );
}