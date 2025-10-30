import Input from "@/components/input";
import { images } from "@/constants/images";
import { globalStyles } from "@/styles";
import { addStyles } from "@/styles/add";
import { homeStyles } from "@/styles/home";
import { useEffect, useState, useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker"
import { addNewProduct } from "@/deps/db";
import { router, useFocusEffect } from "expo-router";


export default function Add() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [units, setUnits] = useState("")
    const [desc, setDesc] = useState("")

    const [image, setImage] = useState<any>(null)

    const [canContinue, setCanContinue] = useState(true)

    useEffect(() => {
        if (name && price && units && desc) setCanContinue(false)
        else setCanContinue(true)

    }, [name, price, units, desc])

    useFocusEffect(useCallback(() => {
        setName("")
        setPrice("")
        setUnits("")
        setDesc("")
        setCanContinue(true)
        setImage(null)
    }, []))

    const takePicture = async () => {

        const picture = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if (!picture.canceled) {
            setImage({ uri: picture.assets[0].uri })
        }
    }

    const addAProduct = async () => {

        const productData = {
            name: name,
            units: units,
            price: price,
            description: desc,
            image: image?.uri ?? null
        }

        await addNewProduct(productData)

        router.push("/home")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { padding: 24, justifyContent: "space-between", paddingBottom: 90 }]}>
                <View style={homeStyles.headerV}>
                    <Text style={homeStyles.headerTxt}>Add a New Product</Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity style={addStyles.uploadImg} onPress={takePicture}>
                            {
                                image ? <>
                                    <Image source={image} style={[addStyles.img]} />
                                </> : <>
                                    <Image source={images.bag} />
                                    <Text style={addStyles.imgT}>add a product image</Text>
                                </>
                            }
                        </TouchableOpacity>
                    </View>
                    <Input label="Product Name" value={name} setValue={setName} editable />
                    <View style={addStyles.priceV}>
                        <View style={addStyles.subPriceV}>
                            <Input label={`Price (₦)`} numeric value={price} setValue={setPrice} editable />
                        </View>
                        <View style={addStyles.subPriceV}>
                            <Input label="Units / Quantity" numeric value={units} setValue={setUnits} editable />
                        </View>
                    </View>
                    <Input label="Product Description" desc value={desc} setValue={setDesc} editable />
                </View>
                <View>
                    <TouchableOpacity onPress={() => addAProduct()} disabled={canContinue} style={[addStyles.finishB, canContinue && addStyles.disabled]}>
                        <Text style={addStyles.finishT}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

