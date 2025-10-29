import { images } from "@/constants/images";
import { splashStyles } from "@/styles";
import { Image, ImageBackground, Text, View } from "react-native";
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_600SemiBold } from "@expo-google-fonts/figtree"
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {

  const [fontsLoaded] = useFonts({
    Figtree_300Light,
    Figtree_400Regular,
    Figtree_600SemiBold
  })

  useEffect(() => {
    setTimeout(() => {
      if (fontsLoaded) {
        router.replace("/(tabs)/home")
      }

      if (!fontsLoaded) return null
    }, 3000)
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
