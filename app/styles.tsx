import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 3, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardImage: {
      width: 80,
      height: 80,
      marginRight: 10,
    },
    cardContent: {
      flex: 1,
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardPrice: {
      fontSize: 14,
      color: 'green',
    },

    /*[id].tsx*/

    container: { 
        padding: 16 
    },

    image: { 
        width: 200, 
        height: 200, 
        alignSelf: 'center' 
    },

    title: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginTop: 10 
    },

    price: { 
        fontSize: 18, 
        color: 'green', 
        marginTop: 5 
    },

    description: { 
        marginTop: 10 
    },

    imageCart: { 
        width: 50, 
        height: 50 
    },

    total: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        padding: 10, 
        textAlign: 'right' 
    },
  });

  export default styles;