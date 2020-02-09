import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// export default class Category extends React.Component {

//     render() {
//         return (
//             <View>
//                 <Text>Category</Text>
//             </View>
//         );
//     }
// }

export default function Category({ route, navigation }) {
    /* 2. Get the param */
    const { categoryName } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>categoryName: {JSON.stringify(categoryName)}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
});