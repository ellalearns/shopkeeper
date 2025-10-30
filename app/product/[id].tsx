import { images } from "@/constants/images";
import { globalStyles } from "@/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { productStyles } from "@/styles/product";
import Input from "@/components/input";
import { useState } from "react";

export default function Product() {

    const { id } = useLocalSearchParams()

    const product = {
        "name": "my product",
        "price": 50,
        "units": 233,
        "description": "paint ur house"
    }

    const [editable, setEditable] = useState(false)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { justifyContent: "space-between" }]}>
                <TouchableOpacity onPress={() => router.back()} style={productStyles.headerBV}>
                    <Image source={images.left} />
                </TouchableOpacity>
                <View style={productStyles.imgV}>
                    <Image source={images.bag} style={productStyles.img} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Name" value={product.name} setValue={() => null} editable={editable} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Description" value={product.description} desc setValue={() => null} editable={editable} />
                </View>
                <View style={productStyles.rowV}>
                    <View style={productStyles.priceVRow}>
                        <Input label="Price" value={product.price.toString()} numeric setValue={() => null} editable={editable} />
                    </View>
                    <View style={productStyles.priceVRow}>
                        <Input label="Units" value={product.units.toString()} setValue={() => null} editable={editable} />
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
