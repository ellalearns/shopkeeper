import { images } from "@/constants/images";
import { dummyProducts } from "@/dummydata";
import { globalStyles } from "@/styles";
import { homeStyles } from "@/styles/home";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
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
                            dummyProducts.map((item, idx) => {
                                return (
                                    <TouchableOpacity key={idx} style={homeStyles.productV}>
                                        <View style={homeStyles.nameV}>
                                            <Image source={images.bag} style={homeStyles.productImg} />
                                            <Text style={homeStyles.productName}>{item.name}</Text>
                                        </View>
                                        <Text style={homeStyles.productPrice}>₦ {item.price}</Text>
                                        <Text style={homeStyles.floatingT}>{item.category}</Text>
                                        <Text style={homeStyles.floatingBottomT}>{item.units} {item.units <= 1 ? "unit" : "units"}</Text>
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
