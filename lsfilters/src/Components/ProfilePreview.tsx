import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";

{/* Para definir los tipos de las props que recibe el componente y para que el TypeScript sepa qué datos se esperan,
    he decidido poner una interficie */}
interface ProfilePreviewProps {
  name: string;
  nickname: string;
  description: string;
  avatar: string;
}

export default function ProfilePreview({ name, nickname, description, avatar } : ProfilePreviewProps) {
  return (
    <View style={style.previewCard}>
      {/* Contenedor circular con el avatar seleccionado por el usuario */}
      <View style={style.previewAvatarContainer}>
        {/* Emoji del avatar */}
        <Text style={style.previewAvatar}>{avatar}</Text>
      </View>

      {/* Nombre del usuario. Si no se ha puesto, aparece "Nombre" como placeholder */}
      <Text style={style.previewName}>{name || "Nombre"}</Text>

      {/* Apodo del usuario, mostrado dentro de una capsulita mona */}
      <Text style={style.previewNickCapsule}>@{nickname || "Apodo"}</Text>

      {/* Descripción. Si no hay nada escrito, se muestra un mensaje por defecto */}
      <Text style={style.previewDesc}>{description || "Tu descripción aparecerá aquí..."}</Text>

    </View>
  );
}
