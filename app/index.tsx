import { images } from "@/constants/images";
import { splashStyles } from "@/styles";
import { Image, ImageBackground, Text, View } from "react-native";
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_600SemiBold } from "@expo-google-fonts/figtree"
import { useEffect } from "react";
import { router } from "expo-router";
import { createProductTable } from "@/deps/db";

export default function Index() {

  const [fontsLoaded] = useFonts({
    Figtree_300Light,
    Figtree_400Regular,
    Figtree_600SemiBold
  })

  useEffect(() => {
    
    const loadProductTable = async () => {
      await createProductTable()
    }

    loadProductTable()

    setTimeout(() => {
        if (fontsLoaded) {
          router.replace("/(tabs)/home")
        }
      }, 2000)

  }, [fontsLoaded])

  return (
    <ImageBackground style={splashStyles.main}>
      <Image source={images.bg} />
      <View>
        <Text style={splashStyles.txt}>ShopKeeper</Text>
      </View>
    </ImageBackground>
  );
}
