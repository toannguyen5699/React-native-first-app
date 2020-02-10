import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductListItem from '../components/ProductListItem';

// export default class Category extends React.Component {

//     render() {
//         return (
//             <View>
//                 <Text>Category</Text>
//             </View>
//         );
//     }
// }

// const products = [
//     {
//         id: 1,
//         images: [
//             {
//                 url: 'http://dummyimage.com/206x179.png/cc0000/ffffff'
//             }
//         ],
//         name: 'helloooooo',
//         price: '500000'
//     },
//     {
//         id: 2,
//         images: [
//             {
//                 url: 'http://dummyimage.com/159x123.jpg/5fa2dd/ffffff'
//             }
//         ],
//         name: 'hey bro',
//         price: '500000'
//     }
// ]

export default function Category({ route, navigation }) {
    /* 2. Get the param */
    const [products, setProducts] = useState([]);
    const { categoryName } = route.params;
    const { categoriesName } = route.params;

    useEffect(() => {
        let ignore = false;
    
        async function fetchData() {
          const result = await axios('https://904e613b.ngrok.io/products?category=' + JSON.parse(categoriesName));
          if (!ignore) setProducts(result.data);
        }
    
        fetchData();
        return () => { ignore = true; }
      }, [JSON.parse(categoriesName)]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await axios(
    //         'https://904e613b.ngrok.io/products?category=', JSON.parse(categoriesName)
    //       );
    //       setProducts(result.data);
    //     };
    //     fetchData();
    //   }, []);
    
    
    // useEffect(async () => {
    //     const result = await axios(
    //         'https://904e613b.ngrok.io/products?category=', categoriesName
    //     );
    //     setProducts(result.data);
    //   });
    // useEffect(() => {
    //     axios.get('https://904e613b.ngrok.io/products?category=', categoriesName)
    //         .then(res => {
    //             setProducts(this.products = res.data) 
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // })
    return (
        <FlatList
            data={products}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({ item }) =>
            <View style={styles.wrapper}>
                <ProductListItem product={item} />
                </View>
            }
            keyExtractor={(item) => `${item.id}`} />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});