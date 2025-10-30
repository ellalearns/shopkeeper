import { images } from "@/constants/images";
import { globalStyles } from "@/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { productStyles } from "@/styles/product";
import Input from "@/components/input";
import { useEffect, useState } from "react";
import { getOneProduct } from "@/deps/db";

export default function Product() {

    const { id } = useLocalSearchParams()

    const [product, setProduct] = useState<any>(null)

    const [editable, setEditable] = useState(false)

    useEffect(() => {
        const getProductDetails = async () => {
            const productDetails = await getOneProduct(id.toString())
            setProduct(productDetails)
        }

        getProductDetails()
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { justifyContent: "space-between" }]}>
                <TouchableOpacity onPress={() => router.back()} style={productStyles.headerBV}>
                    <Image source={images.left} />
                </TouchableOpacity>
                <View style={productStyles.imgV}>
                    <Image source={product?.image ? {uri: product?.image} : images.bag} style={[productStyles.img, product?.image && productStyles.imgVisible]} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Name" value={product?.name} setValue={() => null} editable={editable} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Description" value={product?.description} desc setValue={() => null} editable={editable} />
                </View>
                <View style={productStyles.rowV}>
                    <View style={productStyles.priceVRow}>
                        <Input label="Price" value={product?.price.toString()} numeric setValue={() => null} editable={editable} />
                    </View>
                    <View style={productStyles.priceVRow}>
                        <Input label="Units" value={product?.units.toString()} setValue={() => null} editable={editable} />
                    </View>
                </View>
                <View style={productStyles.buttonV}>
                    <TouchableOpacity style={productStyles.button}>
                        <Text style={productStyles.buttonT}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productStyles.button}>
                        <Text style={productStyles.buttonT}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
