import { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';

import { OUTFITS } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function OutfitListScreen() {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Summer',
        'Winter',
        'Casual',
        'Office',
        'Evening'
    ];

    const filteredOutfits = selectedCategory === 'All'
        ? OUTFITS
        : OUTFITS.filter((item) => item.category === selectedCategory);

    return (
        <View style={GlobalStyle.outfitScreen}>

            <View style={GlobalStyle.outfitHeader}>
                <Text style={GlobalStyle.outfitSmallTitle}>
                    MY WARDROBE
                </Text>

                <Text style={GlobalStyle.outfitTitle}>
                    Outfit inspiration
                </Text>

                <Text style={GlobalStyle.outfitIntro}>
                    Looks you've loved, saved in one place.
                </Text>

                <View style={GlobalStyle.filterContainer}>
                    {categories.map((category) => (
                        <Pressable
                            key={category}
                            onPress={() => setSelectedCategory(category)}
                            style={[
                                GlobalStyle.filterButton,
                                selectedCategory === category &&
                                GlobalStyle.filterButtonActive
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle.filterText,
                                    selectedCategory === category &&
                                    GlobalStyle.filterTextActive
                                ]}
                            >
                                {category}
                            </Text>
                        </Pressable>
                    ))}
                </View>

            </View>

            <FlatList
                data={filteredOutfits}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => {
                    return (
                        <View style={GlobalStyle.outfitCard}>

                            <Image
                                source={item.image}
                                style={GlobalStyle.outfitImage}
                            />

                            <View style={GlobalStyle.outfitInfo}>
                                <Text style={GlobalStyle.outfitName}>
                                    {item.name}
                                </Text>

                                <Text style={GlobalStyle.outfitDescription}>
                                    {item.description}
                                </Text>
                            </View>

                        </View>
                    );
                }}
            />

        </View>
    );
}