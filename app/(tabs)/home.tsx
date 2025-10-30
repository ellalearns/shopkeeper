import { images } from "@/constants/images";
import { getAllProducts } from "@/deps/db";
import { dummyProducts } from "@/dummydata";
import { globalStyles } from "@/styles";
import { homeStyles } from "@/styles/home";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Home() {

    const [products, setProducts] = useState<any>(null)

    useFocusEffect(useCallback(() => {
        const getProducts = async () => {
            const products = await getAllProducts()
            setProducts(products)
            
        }

        getProducts()
    }, []))

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { padding: 24 }]}>
                <View style={homeStyles.headerV}>
                    <Text style={homeStyles.headerTxt}>INVENTORY</Text>
                    <View style={homeStyles.inputV}>
                        <Image source={images.search} />
                        <TextInput
                            placeholder=" search"
                            style={homeStyles.inputtxt} />
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={homeStyles.recentTxt}>Recently added</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={homeStyles.scrollV}>
                        {
                            products?.map((product : any, idx : any) => {
                                return (
                                    <TouchableOpacity key={idx} style={homeStyles.productV} onPress={() => router.push({
                                        pathname: "/product/[id]",
                                        params: {
                                            id: product.id
                                        }
                                    })}>
                                        <View style={homeStyles.nameV}>
                                            <Image source={product.image ? {uri: product.image} : images.bag} style={homeStyles.productImg} />
                                            <Text style={homeStyles.productName}>{product.name}</Text>
                                        </View>
                                        <Text style={homeStyles.productPrice}>₦ {product.price}</Text>
                                        <Text style={homeStyles.floatingBottomT}>{product.units} {Number(product.units) <= 1 ? "unit" : "units"}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
