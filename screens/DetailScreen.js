import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'


//constants
import { icons, images, COLORS, SIZES, FONTS } from '../constants/';


const DetailScreen = ({ route, navigation }) => {

    function renderHeader() {
        return (
            <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: COLORS.white }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Search pressed")}>
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: COLORS.white }}

                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderInfo() {
        let { itemInfo } = route.params;
        if (itemInfo) {
            return (
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Header */}
                    {renderHeader()}
                    {/* Info Section */}
                    <View
                        style={{
                            position: 'absolute',
                            top: '45%',
                            left: '15%',
                            backgroundColor: COLORS.transparentLightGray1,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 80
                        }}
                    >
                        <View style={{ width: 10, height: 10, borderRadius: 20, backgroundColor: COLORS.blue }}></View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: '42%',
                            left: '30%',
                            justifyContent: 'center',
                            backgroundColor: COLORS.transparentLightGray1,
                            borderRadius: 10,
                            paddingVertical: SIZES.radius,
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Chair</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ marginTop: SIZES.base, ...FONTS.body4, color: COLORS.darkGray }}>{itemInfo.productName}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.darkGreen, marginLeft: SIZES.padding }}>${itemInfo.price.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', bottom: '23%', marginHorizontal: SIZES.padding }}>
                        <Text style={{ ...FONTS.body2, color: COLORS.lightGray2 }}>Furniture</Text>
                        <Text style={{ marginTop: SIZES.base, ...FONTS.h1, color: COLORS.white }}>{itemInfo.productName}</Text>
                    </View>
                </ImageBackground >
            )
        } else {
            <View></View>
        }
    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    bottom: '5%',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    height: 70,
                    flexDirection: 'row',
                    borderRadius: 35,
                }}
            >
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image
                            source={icons.dashboard}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.gray
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.shadow, {
                            width: 50, height: 50, backgroundColor: COLORS.primary, borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                        }]}
                        onPress={() => console.log("Plus pressed")}
                    >
                        <Image
                            source={icons.plus}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => console.log("Account pressed")}>
                        <Image
                            source={icons.user}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.gray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View>
            {renderInfo()}
            {renderFooter()}
        </View>
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
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default DetailScreen
