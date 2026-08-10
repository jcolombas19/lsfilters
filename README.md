<div align="center">

![LsFilters](https://capsule-render.vercel.app/api?type=waving&color=0:FFD9A0,100:FF8C42&height=200&text=📸%20LsFilters&fontSize=55&fontColor=FFFFFF&fontAlignY=38&desc=Snapchat-style%20AR%20face%20filters%20in%20React%20Native%20🎩&descSize=18&descAlignY=58)

**Snapchat-style AR face filters, built from scratch in React Native.**

Point the camera at your face and watch caps, glasses and crowns
track your every move in real time. 🎩🕶️👑

![React Native](https://img.shields.io/badge/React_Native-FF8C42?style=for-the-badge&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-2E2E2E?style=for-the-badge&logo=expo&logoColor=FFB061)
![TypeScript](https://img.shields.io/badge/TypeScript-E8722A?style=for-the-badge&logo=typescript&logoColor=white)
![VisionCamera](https://img.shields.io/badge/VisionCamera-D14D28?style=for-the-badge&logo=googlelens&logoColor=white)

</div>

---

## ✨ What it does

- **Live camera feed** with front/back camera switching
- **Real-time face detection** - filters follow your face as you move
- **5 fun filters** - cap, sunglasses, flower crown, donkey face & more
- **Custom profile** - emoji avatar picker with live preview
- **Tested** with Jest & React Native Testing Library

## 🛠️ How it works

Face detection runs on every camera frame via
[`react-native-vision-camera`](https://github.com/mrousavy/react-native-vision-camera)
and its face detector plugin. Each filter is a PNG overlay positioned and
scaled using the detected face bounds - offsets and ratios are tuned per
filter so the cap sits on your head, not your chin. 🎩

## 🚀 Run it

```bash
npm install
npx expo run:android   # or run:ios
```

> 📱 Requires a real device (or emulator with camera support) and camera permissions.
