import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: 'Quan Dui' },
                { id: 2, name: 'Ao Phong' },
                { id: 3, name: 'Quan' }
            ]
        };
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            // // <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
            //   {/* {categories.map(category => (
            //     <CategoryListItem key={category.id} category={category}/>
            //   ))} */}
            <FlatList
                data={categories}
                renderItem={({ item }) =>
                    <CategoryListItem
                        category={item}
                        onPress={() => navigation.navigate('Category', {
                            categoryName: item.name
                        })} />
                }
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={styles.container}
            />
            // </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'stretch',
        // backgroundColor: '#fff',
        // justifyContent: 'center',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
});