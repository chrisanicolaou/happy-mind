# happy-mind

![platforms](https://img.shields.io/badge/platforms-iOS%20%2F%20android-brightgreen)
![repo size](https://img.shields.io/github/repo-size/chrisanicolaou/happy-mind)
![language](https://img.shields.io/github/languages/top/chrisanicolaou/happy-mind)
![PRs](https://img.shields.io/github/issues-pr-closed/chrisanicolaou/happy-mind)
![followers](https://img.shields.io/github/followers/chrisanicolaou?style=social)

---

---

## A mobile app that helps you take the first steps to improving your mental wellbeing

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

The purpose of Happy Mind is to gently encourage the user into behaviours that will have a positive impact on their mental wellbeing. We used [advice from the NHS](https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/) to conceptualise our app, which is broken down into 3 main sections: [Interests / Hobbies](#interests), [Get Active](#active), and [Meditation](#meditation). We wanted the app to be largely minimalistic and unobtrusive - giving the user freedom to explore the app, without being harrassed by excessive pop-ups, push notifications, or other prompts.

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

From concept to delivery, we only had 6 full days to work on our app. This extremely limiting timeframe forced us to think critically about what we wanted our minimum viable product to be. Since it was important to us that the user would have access to several different core sections of the app, by the time we finished, we were left with a pretty bare app. We originally wanted our app to feel a little more personal, and have a little more depth than what it is now - ultimately just retrieving data from our database.

Below are some features we would have loved to have implemented, given more time.

### **Test Coverage**:

Since we were using Firebase as our backend, we had originally intended to have extensive testing for our frontend components, to ensure proper TDD and good coverage of the app. Unfortunately, Expo didn't play nice with Jest and we faced numerous errors when spiking and writing frontend tests. If we had enough time to resolve these before jumping in to the project, we would have loved to have extensive testing throughout our app.

### **My Wellbeing**:

In this section, the user would have been presented with a graph showing how they have been feeling each day over the course of their time on the app. The user can average by day, week, month - and can click different options to customise the graph shown. For instance, the user can see their Get Active history, and how their mood has been affected on days where they complete exercise.

### **More personalised experience**:

Since we already implemented storing information about the user on Firestore, we would have loved to present the user with additional inputs when signing up. This would allow us to create a unique fitness plan for them, as well as present them with unique hobbies based off of their interests when signing up, rather than sectioning the hobbies off into different interests each session.

### **Cleaner UI & navigation**:

Our initial MVP didn't properly consider navigating around the app. As such, during development, we ended up with lots of back buttons and a UI that doesn't look very "app like". With a little more time, we would have loved to remove the Homepage Screen and instead have a bottom appbar that allows the user to navigate through the app that way.

In addition to this, the app needs some polishing - there are a few small visual bugs we would have liked to resolve, as well as including sound effects, music on meditation, and other vfx/sfx improvements.

### **Settings**:

A settings menu to allow the user to customise their [experience](#more-personalised-experience). This would also allow the user to logout - a much needed function that our app currently lacks!

---

---

## Interests / Hobbies

In this section, users are first taken to the "interests" screen, where they are presented with a series of interests - for example, "Sports".

Once they select an interest, the app fetches and randomises an array of corresponding hobbies from Firestore. The user is then taken to the "Hobbies" screen, where they can then swipe left/right to view different hobbies related to their interest. Once they click on a hobby, they are shown additional details for how they can pursue this hobby, including a link to a site that will help them get started.

---

---

## Get Active!

In this section, users are first required to input both the type and intensity of their workout. Once done, the app fetches and randomises an array of corresponding exercises from Firestore.

The user is then taken to their workout, where (similar to the Hobbies screen) they can swipe between different exercises. Each exercise includes a brief description, along with an embedded video example of the exercise.

The app is designed to not "lock" the user into exercising, allowing them to finish whenever they want.

---

---

## Meditation

In this section, users are taken to a simple screen designed to relax them. They are guided through common breathing and mindfulness exercises to help them focus and destress.
