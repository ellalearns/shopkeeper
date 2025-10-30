import { images } from "@/constants/images";
import { inputStyles } from "@/styles/input";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

type InputProps = {
    label: string,
    numeric?: boolean,
    desc?: boolean,
    value: string,
    setValue: (value: any) => void,
    editable?: boolean
}

export default function Input({ label, numeric, desc, value, setValue, editable }: InputProps) {

    return (
        <View style={inputStyles.main}>
            <Text style={inputStyles.label}>{label}</Text>
            <View style={inputStyles.txtBox}>
                <TextInput
                    value={value}
                    onChangeText={(text) => {
                        setValue(text)
                    }}
                    style={[inputStyles.txt, desc && inputStyles.desc, !editable && inputStyles.editableBox]}
                    keyboardType={numeric ? "numeric" : "default"}
                    multiline={desc ? true : false}
                    editable={editable} />

                {/* {
                    editable === false ? <TouchableOpacity><Image source={images.down} /></TouchableOpacity> : null
                } */}
            </View>
        </View>
    )
}
