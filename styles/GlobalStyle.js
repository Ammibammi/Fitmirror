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
        backgroundColor: '#6B4F3A',
        padding: 12,
        borderRadius: 8,
    },

    primaryBtnText: {
        color: '#FFFFFF',
    },
    // HomeScreen
homeContainer: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    paddingHorizontal: 28,
    paddingTop: 35,
},

logoText: {
    fontSize: 14,
    letterSpacing: 4,
    fontWeight: '600',
    color: '#777',
    marginBottom: 20,
},

homeTitle: {
    fontSize: 38,
    fontWeight: '600',
    color: '#6B4F3A',
    lineHeight: 44,
    marginBottom: 12,
},

homeDescription: {
    fontSize: 17,
    color: '#888',
    lineHeight: 24,
    marginBottom: 25,
},

homeImage: {
    width: '100%',
    height: 330,
    borderRadius: 18,
    resizeMode: 'cover',
    marginBottom: 24,
},

homeSubtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#6B4F3A',
    marginBottom: 6,
},

homeSmallText: {
    fontSize: 15,
    color: '#888',
    marginBottom: 20,
},

homeButtonContainer: {
    flexDirection: 'row',
    gap: 10,
},


// AboutScreen
aboutContainer: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    padding: 28,
},

aboutSmallTitle: {
    fontSize: 13,
    letterSpacing: 3,
    color: '#888',
    marginBottom: 18,
},

aboutTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: '#6B4F3A',
    lineHeight: 40,
    marginBottom: 18,
},

aboutText: {
    fontSize: 17,
    lineHeight: 25,
    color: '#666',
    marginBottom: 30,
},

aboutBox: {
    backgroundColor: '#EEEAE4',
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
},

aboutBoxTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B4F3A',
    marginBottom: 7,
},

aboutBoxText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
},

aboutQuote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6B4F3A',
    marginTop: 30,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: '#6B4F3A',
},
// OutfitListScreen

outfitScreen: {
    flex: 1,
    backgroundColor: '#F7F4EF',
},

outfitHeader: {
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 20,
},

outfitSmallTitle: {
    fontSize: 13,
    letterSpacing: 3,
    color: '#888',
    marginBottom: 10,
},

outfitTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#6B4F3A',
    marginBottom: 6,
},

outfitIntro: {
    fontSize: 16,
    color: '#777',
},

outfitCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 28,
    marginBottom: 22,
    padding: 12,
    borderRadius: 18,
},

outfitImage: {
    width: '100%',
    height: 430,
    borderRadius: 14,
    resizeMode: 'cover',
},

outfitInfo: {
    paddingTop: 15,
    paddingHorizontal: 5,
    paddingBottom: 8,
},

outfitName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E1E1E',
},

outfitDescription: {
    fontSize: 15,
    color: '#888',
    marginTop: 5,
},
filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 10,
},

filterButton: {
    backgroundColor: '#E8E0D8',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
},

filterButtonActive: {
    backgroundColor: '#6B4F3A',
},

filterText: {
    color: '#6B4F3A',
    fontSize: 14,
},

filterTextActive: {
    color: '#FFFFFF',
},
});
