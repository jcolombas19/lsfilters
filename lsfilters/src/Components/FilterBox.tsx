import React from "react";
import { Image, Pressable } from "react-native";
import {style} from "./styles"

type ImageInfo = {
  name: string;
  selected: string;
  setSelected: (text:string)=> void
};

export default function FilterBox(props: ImageInfo) {
    return (
        <Pressable style={[style.imgBox, props.name === props.selected ? style.selected : {}]} onPressOut ={()=>{props.setSelected(props.name)}}>
                {props.name === '1'?
                    <Image source={require('../../assets/sombrero.png')} style={style.imgFilter} resizeMode="contain"/>                 
                : props.name === '2'?
                    <Image source={require('../../assets/gafas2.png')} style={style.imgFilter} resizeMode="contain"/>
                : props.name === '3'?
                    <Image source={require('../../assets/hairCrown.png')} style={style.imgFilter} resizeMode="contain"/>
                : props.name === '4'?
                    <Image source={require('../../assets/fonkeyFace.png')} style={style.imgFilter} resizeMode="contain"/>
                :
                    <Image source={require('../../assets/gafas.png')} style={style.imgFilter} resizeMode="contain"/>
                }
            
            
        </Pressable>
    )
}


