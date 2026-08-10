import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import {
    CameraPosition, 
    useCameraDevice,
    useCameraPermission
} from 'react-native-vision-camera';

import { Camera } from 'react-native-vision-camera-face-detector'

import FilterBox from "../../Components/FilterBox";

import useCameraHelper from "../../hooks/useCameraHelper";
import { Filter } from "../../types/Filter";
import FilterOverlay from "../../Components/FilterOverlay";
import { FlatList } from "react-native";
import {styles} from "./styles"

export default function CameraScreen() {
    

const { hasPermission, requestPermission } = useCameraPermission();
    const [initialized, setInitialized] = useState(false);
    const [cameraFacing, setCameraFacing] = useState<CameraPosition>('front');
    const [filters, setFilters] = useState('');
    const [filterOrder, setFilterOrder] = useState(['1','2','3','4','5'])
    
    
    const {onFaceDetected, handleUIRotation, faceDetectionOptions,faceH, faceW, faceX,faceY,aRot} = useCameraHelper();

    useEffect(()=> {
        requestPermission();
    }, [])

    const onStartPress = () => {
        setInitialized(true);
        setCameraFacing('back');
    }

    const onChangeCamera = () => {
        setCameraFacing(cameraFacing === 'back' ? 'front' : 'back');
    }
    const cameraDevice = useCameraDevice(cameraFacing);

    const filterGorra:Filter = {
        id:'gorra',
        name:'Gorra',
        source: require('../../../assets/sombrero.png'),
        ratio:0.68,
        scale:1.4,
        yOffset:0.100,
        xOffset:0.999
    }
    const filterGafas:Filter = {
        id:'gafas',
        name:'Gafas',
        source: require('../../../assets/gafas.png'),
        ratio:0.68,
        scale:1,
        yOffset:-1.55,
        xOffset:1.7
    }
    const filterCrown:Filter = {
        id:'crown',
        name:'Crown',
        source: require('../../../assets/hairCrown.png'),
        ratio:0.68,
        scale:1.4,
        yOffset:0.6,
        xOffset:0.95
    }
    const filterDonkey:Filter = {
        id:'donkey',
        name:'Donkey',
        source: require('../../../assets/fonkeyFace.png'),
        ratio:0.68,
        scale:3,
        yOffset:-0.2,
        xOffset:0.65
    }
    const filterBob:Filter = {
        id:'bob',
        name:'Bob',
        source: require('../../../assets/gafas2.png'),
        ratio:0.68,
        scale:1.4,
        yOffset:-0.8,
        xOffset:1.29
    }


    return <View style={styles.bigPage}> 

        {!hasPermission?
            <Text>No access to camera</Text>
            :null
        }

        {cameraDevice && hasPermission && initialized ?
            <View >
                <Camera
                    style={styles.camera}
                    onUIRotationChanged={handleUIRotation}
                    faceDetectionCallback ={onFaceDetected}
                    device = {cameraDevice}
                    isActive = {initialized}
                />
                {faceH&& faceW && faceX && faceY && aRot ?
                <FilterOverlay 
                    filter={filters === '1'? filterGorra: filters === '2'? filterBob: filters === '3'? filterCrown : filters === '4'? filterDonkey : filterGafas} 
                    faceW={faceW} 
                    faceH={faceH} 
                    faceX={faceX} 
                    faceY={faceY} 
                    aRot={aRot} 
                    cameraFacing={cameraFacing}/>
                :null}

            </View>
        : <View style={styles.replaceCamera}>
            <Text style = {styles.replaceCameraText}>Press start camera to turn it on!</Text>
        </View>
          
        }
        
        <View style={styles.underBox}>
            <View>
                <Text style={styles.selectFilter}>Select your filter:</Text>
                <FlatList
                    data={filterOrder}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.filterContainer}
                    renderItem={({item}) => (
                        <FilterBox
                            name={item}
                            selected={filters}
                            setSelected={setFilters}
                            
                        />
                    )}
                />
            </View>

            <View style={styles.butonBox}>            
                <TouchableOpacity onPress={onStartPress} style={styles.butons}>
                    <Text style={{color: 'white'}}>Start camera</Text>
                </TouchableOpacity>  

                <TouchableOpacity onPress={onChangeCamera} style={styles.butons}>
                    <Text style={{color: 'white'}}>Change camera</Text>  
                </TouchableOpacity>
            </View>
        </View>
    </View> 
}