import { useWindowDimensions } from "react-native";
import { Frame} from "react-native-vision-camera";
import { Face, FaceDetectionOptions } from "react-native-vision-camera-face-detector";
import { useRef } from "react";
import { useSharedValue } from "react-native-reanimated";


const useCameraHelper = () => {

    const faceW = useSharedValue(0);
    const faceH = useSharedValue(0);
    const faceX = useSharedValue(0);
    const faceY = useSharedValue(0);
    const aRot  = useSharedValue(0);

    const {width, height} = useWindowDimensions();

    function handleUIRotation(rotation: number) {
        aRot.value = rotation;
    }


    const faceDetectionOptions = useRef<FaceDetectionOptions>({
        performanceMode: 'fast',
        classificationMode: 'all',
        contourMode: 'all',
        landmarkMode: 'all',
        windowWidth: width,
        windowHeight: height,
        
    }).current;


    const onFaceDetected = (faces: Face[], _frame: Frame) => {
        console.log(`Detected ${faces.length} faces`);
    
        if (faces.length <= 0) {
            faceW.value = 0;
            faceH.value = 0;
            faceX.value = 0;
            faceY.value = 0;
            return;
        }
        const {bounds} = faces[0];
        faceW.value = bounds.width;
        faceH.value = bounds.height;
        faceX.value = bounds.x;
        faceY.value = bounds.y;
    }
    return {
        onFaceDetected,
        handleUIRotation,
        faceDetectionOptions,
        faceH,
        faceW,
        faceX,
        faceY,
        aRot
    }
}
export default useCameraHelper;