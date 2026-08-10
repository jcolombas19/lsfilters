import React, { useState } from "react";
import { ScrollView } from "react-native";
import AvatarSelector from "../../Components/AvatarSelector";
import ProfileForm from "../../Components/ProfileForm";
import ProfilePreview from "../../Components/ProfilePreview";
import { style } from "../../Components/styles";

export default function Profile() {
  // Aquí se definen los estados que guardarán los datos introducidos por el usuario.
  const [name, setName] = useState("");
  const [Tname, setTName] = useState("");

  const [nickname, setNickname] = useState("");
  const [Tnickname, setTNickname] = useState("");

  const [description, setDescription] = useState("");
  const [Tdescription, setTDescription] = useState("");

  const [avatar, setAvatar] = useState("🐱");
  const [Tavatar, setTAvatar] = useState("🐱");

  return (
    // Aquí, el ScrollView permite hacer scroll si el contenido no cabe en la pantalla.
    <ScrollView 
      style={style.appContainer}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}>
        
      {/* Se llama al componente de ProfilePreview, para mostrar una vista previa, en tiempo real, del perfil con los datos introducidos por el usuario.*/}
      <ProfilePreview
        name={name}
        nickname={nickname}
        description={description}
        avatar={avatar}
      />

      {/* Se llama al componente de AvatarSelector, para elegir el avatar con emojis.*/}  
      <AvatarSelector 
        selected={Tavatar}
        onSelect={setTAvatar}
      />
      
      {/* Se llama al componente de ProfileForm, para que el usuario escriba su nombre, apodo y descripción.*/}

      <ProfileForm
        setName={setName}
        setNickname={setNickname}
        setDescription={setDescription}
        setAvatar={setAvatar}
        Tname={Tname}
        setTName={setTName}
        Tnickname={Tnickname}
        setTNickname={setTNickname}
        Tdescription={Tdescription}
        setTDescription={setTDescription}
        Tavatar={Tavatar}
      />

    </ScrollView>
  );
}
