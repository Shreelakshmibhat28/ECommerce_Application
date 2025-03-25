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
        padding: 20, 
        textAlign: 'left' 
    },

    addToCartButton: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        
        alignItems: 'center',
      },

     addToCartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        },

    /*_layout.tsx*/

    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

  

  const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      marginVertical: 5,
      borderRadius: 8,
      elevation: 3, // Android shadow
      shadowColor: '#000', // iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      color: 'gray',
    },

    picker: {
        height: 100,  
        width: 100,   
        backgroundColor: '#f0f0f0',
        borderRadius: 10, 
        marginTop: 10, 
        paddingVertical: 5, 
        paddingHorizontal: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
      },

      counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      counterButton: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
        textAlign: 'center',
      },
      counterText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
      },
  });

  export default styles;
    export { localStyles };