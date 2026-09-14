import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({

    // Generel container
    container: {
        flex: 1,
        backgroundColor: '#F7F4EF',
        padding: 16,
    },

    // Outfit liste
    listContainer: {
        flex: 1,
        backgroundColor: '#F7F4EF',
        padding: 16,
    },

    itemContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 12,
        padding: 12,
    },

    outfitImage: {
        width: '100%',
        height: 450,
    },

    itemText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E1E1E',
        marginTop: 10,
    },

    itemDescription: {
        fontSize: 14,
        color: '#777777',
        marginTop: 4,
    },

    // Knapper
    buttonContainer: {
        flexDirection: 'row',
    },

    primaryBtn: {
        backgroundColor: '#1E1E1E',
        padding: 12,
        borderRadius: 8,
    },

    primaryBtnText: {
        color: '#FFFFFF',
    },

});
