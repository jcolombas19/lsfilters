import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

const emojis = ["🐯", "🤡", "🎃", "👽", "🤓", "🤩", "🤠", "👹"];

{/* Para definir los tipos de las props que recibe el componente y para que el TypeScript sepa qué datos se esperan,
    he decidido poner una interficie */}
interface AvatarSelectorProps {
  selected: string;
  onSelect: (emoji: string) => void;
}

export default function AvatarSelector({ selected, onSelect } : AvatarSelectorProps) {
  return (
  <View style={style.avatarContainer}>
    {/* View del título para que el usuario escoja el avatar que quiera*/}
    <View style={style.avatarTitleContainer}>
      <Text style={style.avatarTitleText}>Elige un avatar</Text>
    </View>

    {/* Padding para encajar el contenido del contenedor de la mejor manera
        y para que quede bien el título anterior.*/}
    <View style={style.avatarInner}>
      {/* View de la lista de emojis a escoger por el usuario*/}
      <View style={style.avatarList}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            testID = {"avatar-"+index}
            onPress={() => onSelect(emoji)}
            style={ selected === emoji ? style.avatarSelected : style.avatarItem }
          >
            <Text style={style.avatarEmoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

  </View>
);
}