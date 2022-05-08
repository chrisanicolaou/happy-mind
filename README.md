# happy-mind

![platforms](https://img.shields.io/badge/platforms-iOS%20%2F%20android-brightgreen)
![repo size](https://img.shields.io/github/repo-size/chrisanicolaou/happy-mind)
![followers](https://img.shields.io/github/followers/chrisanicolaou?style=social)

![language](https://img.shields.io/github/languages/top/chrisanicolaou/happy-mind)
![PRs](https://img.shields.io/github/issues-pr-closed/chrisanicolaou/happy-mind)
![lines](https://img.shields.io/tokei/lines/github/chrisanicolaou/happy-mind)

---

---

## A mobile app that helps you to take the first steps to improving your mental wellbeing!

---

---

## Table of contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [Tech We Used](#new-tech-we-used)
4. [Our Limitations](#our-limitations)
5. [Interests / Hobbies](#interests)
6. [Get Active!](#active)
7. [Meditation](#meditation)

---

---

## Overview

The purpose of Happy Mind is to gently encourage the user into behaviours that will have a positive impact on their mental wellbeing. We used [advice from the NHS](https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/) to structure our app, which is broken down into 3 main sections: [Interests / Hobbies](#interests), [Get Active](#active), and [Meditation](#meditation). We wanted the app to be largely minimalistic and unobtrusive - giving the user freedom to explore the app, without being harrassed by excessive pop-ups, push notifications, or other prompts.

---

---

## Setup

**Prerequisites**: [Node](https://nodejs.org/en/) (version 16.x.x), [expo CLI](https://docs.expo.dev/get-started/installation/), [expo GO](https://expo.dev/client)

First, clone the repo to be able to view our app locally:

` git clone https://github.com/chrisanicolaou/happy-mind.git`

Navigate into the repo and run npm install to install dependencies:

`cd happy-mind`

`npm install`

Launch the project in expo:

`expo start`

Expo will generate a QR code - scan this with your phone's camera app (iOS) or with Expo Go (android) and the app will launch on your mobile device!

(Alternatively, you can view the app on an [Android](https://docs.expo.dev/workflow/android-studio-emulator/) or [iOS](https://docs.expo.dev/workflow/ios-simulator/) emulator - although this process is significantly more hassle.)

---

---

## New Tech We Used

We really wanted to challenge ourselves on this project, and make an app that relies on technology that we have had no prior knowledge of. The process was an incredible learning experience, giving us confidence that we can adapt to new technologies as and when required.

### **React Native**:

[React Native](https://reactnative.dev/) is a popular framework for developing cross-platform mobile apps using the same code. This seemed like a sensible choice when planning our project, as the idea greatly suited a mobile app, and we wanted it to be cross-platform to be as accessible as possible. We chose React Native over other cross-platform frameworks purely for its extensive docs and popularity within the community.

### **Expo**:

[Expo](https://expo.dev/) is a framework built on top of React Native that provides a set of tools to make building and testing a React Native app a little easier. Without Expo, both Android Studio and XCode (and, by extension, a Mac) would be required to test and build our cross-platform app. Expo allowed us the freedom to use our preferred IDEs (mainly VSCode), and (through the use of Expo Go & various emulators) made testing significantly easier.

### **Firebase & Firestore**:

[Firebase](https://firebase.google.com/) is a BaaS (backend-as-a-service) that provides essential tools for building a fully functioning backend, without the need for a dedicated server. We chose Firebase for its extremely easy-to-read docs - and the minimal setup required helped us achieve more in the limited time that we had.

[Firestore](https://firebase.google.com/products/firestore?gclid=Cj0KCQjw1N2TBhCOARIsAGVHQc5g3g1LW0QbfEVGQFqLacBmh_Ycsxo1Ym1iF8UlY2FrekaH2Z3fvwYaAlZ3EALw_wcB&gclsrc=aw.ds) is a noSQL document, realtime database that lives on your Firebase console. Given that we were already using Firebase, using Firestore to handle our data was the most straightforward option.

### **Special Mention**:

While not explicitly new tech, we wanted to draw special mention to the following packages, which we found very useful when developing our app:

- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)
- [React Native Snap Carousel](https://github.com/meliorence/react-native-snap-carousel)
- [React Native Webview](https://github.com/react-native-webview/react-native-webview)

---

---

## Our Limitations
