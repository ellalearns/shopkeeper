import { images } from "@/constants/images";
import { globalStyles } from "@/styles";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { productStyles } from "@/styles/product";
import Input from "@/components/input";
import { useCallback, useEffect, useState } from "react";
import { deleteProduct, editProduct, getOneProduct } from "@/deps/db";

export default function Product() {

    const { id } = useLocalSearchParams()

    const [product, setProduct] = useState<any>(null)

    const [editable, setEditable] = useState(false)

    const [editText, setEditText] = useState("Edit")

    const [name, setName] = useState(product?.name)
    const [description, setDescription] = useState(product?.description)
    const [price, setPrice] = useState(product?.price)
    const [units, setUnits] = useState(product?.units)

    const onClickEdit = () => {
        setEditable(!editable)
    }

    const onClickSave = async () => {
        await editProduct({ name, price, units, description, id })
    }

    const onClickDelete = async () => {
        await deleteProduct(id.toString())
        router.push("/(tabs)/home")
    }

    useEffect(() => {
        if (editable) setEditText("Save")
        else setEditText("Edit")
    }, [editable])

    useEffect(() => {
        const getProductDetails = async () => {
            const productDetails = await getOneProduct(id.toString())
            setProduct(productDetails)
        }

        getProductDetails()
    }, [])

    useEffect(() => {
        setName(product?.name)
        setDescription(product?.description)
        setPrice(product?.price)
        setUnits(product?.units)
    }, [product])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.main, { justifyContent: "space-between" }]}>
                <TouchableOpacity onPress={() => router.back()} style={productStyles.headerBV}>
                    <Image source={images.left} />
                </TouchableOpacity>
                <View style={productStyles.imgV}>
                    <Image source={product?.image ? { uri: product?.image } : images.bag} style={[productStyles.img, product?.image && productStyles.imgVisible]} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Name" value={name} setValue={setName} editable={editable} />
                </View>
                <View style={productStyles.priceV}>
                    <Input label="Description" value={description} desc setValue={setDescription} editable={editable} />
                </View>
                <View style={productStyles.rowV}>
                    <View style={productStyles.priceVRow}>
                        <Input label="Price" value={price} numeric setValue={setPrice} editable={editable} />
                    </View>
                    <View style={productStyles.priceVRow}>
                        <Input label="Units" value={units} setValue={setUnits} editable={editable} />
                    </View>
                </View>
                <View style={productStyles.buttonV}>
                    <TouchableOpacity onPress={async () => {
                        if (editText == "Edit") {
                            onClickEdit()
                        } else {
                            await onClickSave()
                            onClickEdit()
                        }
                    }} style={productStyles.button}>
                        <Text style={productStyles.buttonT}>{editText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={async () => onClickDelete()} style={productStyles.button}>
                        <Text style={productStyles.buttonT}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
