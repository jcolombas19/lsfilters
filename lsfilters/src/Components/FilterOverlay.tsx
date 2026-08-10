import React, { memo } from "react"
import { Filter } from "../types/Filter"
import Animated, { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { CameraPosition } from "react-native-vision-camera"

interface Props {
    filter: Filter
    faceW: SharedValue<number>
    faceH: SharedValue<number>
    faceX: SharedValue<number>
    faceY: SharedValue<number>
    aRot: SharedValue<number>
    cameraFacing: CameraPosition

}

const FilterOverlay = memo(({ filter, faceW, faceX, faceH, faceY, aRot, cameraFacing }: Props) => {

    const style = useAnimatedStyle(() => {

        if (!filter || faceW.value <= 0) {
            return { width: 0, height: 0, opacity: 0 };
        }

        const w = faceW.value * (filter.scale ?? 1.7);
        const h = w * (filter.ratio ?? 0.6);

        const cx = faceX.value + (faceW.value / 2);
        const left = cx - (w / 2) + (filter.xOffset ? filter.xOffset * w : 0);
        const top = faceY.value - h * (filter.yOffset ?? 0.55);

        return {
            position: 'absolute',
            width: withTiming(w, { duration: 80 }),
            height: withTiming(h, { duration: 80 }),
            left: withTiming(left, { duration: 80 }),
            top: withTiming(top, { duration: 80 }),
            opacity: withTiming(1, { duration: 100 }),
            transform: [
                { rotate: `${aRot.value}deg` },
                // Si la cámara frontal invierte y lo necesitas, descomenta:
                // cameraFacing === 'front' ? { scaleX: -1 } : { scaleX: 1 },
            ],
        };
    }, [filter, cameraFacing]);


    if (!filter) return null;


    return (
        <Animated.Image source={filter.source} resizeMode="contain" style={style} />
    );
})

export default FilterOverlay