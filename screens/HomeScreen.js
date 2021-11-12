import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';

//constants
import { icons, images, COLORS, SIZES, FONTS } from '../constants/';

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ marginHorizontal: SIZES.padding }}
                onPress={() => onPress(item)}
            >
                <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>
                {
                    selectedTab.id == item.id &&
                    <View
                        style={{ alignItems: 'center', marginTop: SIZES.base / 2 }}>
                        <View style={{
                            backgroundColor: COLORS.blue,
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                        }}></View>
                    </View>
                }
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    marginLeft: SIZES.padding
                }}
                onPress={() => navigation.navigate('Detail', { "itemInfo": item })}
            >
                <View style={{ width: SIZES.width / 2 }}>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Furniture</Text>
                        <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
                    </View>
                    <View style={{ position: 'absolute', bottom: 20, left: 30, borderRadius: 15, backgroundColor: COLORS.transparentLightGray, paddingVertical: 10, paddingHorizontal: 15 }}>
                        <Text style={{ ...FONTS.h2 }}>${item.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => item.productId}
            />
        </View>
    )
}

const HomeScreen = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => console.log("Menu pressed")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log("Cart Pressed")}
                    >
                        <Image
                            source={icons.cart}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View
                style={{
                    marginTop: SIZES.base / 2,
                    marginHorizontal: SIZES.padding,
                }}
            >
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>Collection of</Text>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={[styles.shadow, {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 100,
                    borderRadius: 20,
                    backgroundColor: COLORS.white,
                }]}
            >
                <View
                    style={{ width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.lightGray2, borderRadius: 20 }}
                >
                    <Image
                        source={images.sofa}
                        resizeMode="contain"
                        style={{ width: '60%', height: '60%' }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h3 }}>Special offer</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.black, ...FONTS.body3 }}>Adding to your cart</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary, borderRadius: 10, width: 40, height: '70%' }} onPress={() => console.log("Add card pressed")}>
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{ width: '50%', height: '50%' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            {renderHeader()}
            {/* Titles */}
            {renderTitle(selectedTab.title)}
            {/* TabList */}
            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />
            {/* Cards */}
            <View style={{ flex: 1, marginTop: SIZES.base }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>
            {/* Footer */}
            <View style={{ height: '18%', marginTop: SIZES.padding }}>
                {renderFooter()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default HomeScreen;
