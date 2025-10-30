import Input from "@/components/input";
import { images } from "@/constants/images";
import { globalStyles } from "@/styles";
import { addStyles } from "@/styles/add";
import { homeStyles } from "@/styles/home";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Add() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [units, setUnits] = useState("")
    const [desc, setDesc] = useState("")

    const category = "default"
    let image = null

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { padding: 24, justifyContent: "space-between", paddingBottom: 90 }]}>
                <View style={homeStyles.headerV}>
                    <Text style={homeStyles.headerTxt}>Add a New Product</Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity style={addStyles.uploadImg}>
                            {
                                image ? <>
                                    <Image source={image} style={addStyles.img}/>
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
                            <Input label={`Price (₦)`} numeric value={price} setValue={setPrice} />
                        </View>
                        <View style={addStyles.subPriceV}>
                            <Input label="Units / Quantity" numeric value={units} setValue={setUnits} />
                        </View>
                        <View style={addStyles.subPriceV}>
                            <Input label="Category" value="default" editable={false} setValue={() => null} />
                        </View>
                    </View>
                    <Input label="Product Description" desc value={desc} setValue={setDesc} />
                </View>
                <View>
                    <TouchableOpacity style={addStyles.finishB}>
                        <Text style={addStyles.finishT}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

