---
title: "Designing an Arabic-first service interface"
description: "Exploring language, layout direction and reusable components in the Sallehni React Native/Expo prototype."
category: "Interfaces & UX"
published: 2026-10-06
order: 3
cover: "interface"
---

An Arabic-first interface involves more than replacing English strings. Typography, layout direction and the behavior of small controls all contribute to how natural the experience feels.

Sallehni is my React Native/Expo vehicle-service prototype. It brings together five screens: vehicle health, simulated diagnostics, service booking, repair tracking and maintenance history. A browser demo makes those interfaces easy to explore.

## Share the language state

The prototype keeps locale, RTL state and calendar selection in a shared React Context. Components access these values through a translation hook rather than creating independent language settings on every screen.

That creates one place to manage interface strings and shared state. Headers, tabs, cards and calendar controls can respond to the same language choice.

For example, a component can select its label and typography from the current state:

```tsx
const { t, isRTL } = useTranslation();

<Text style={{
  fontFamily: isRTL ? 'Tajawal-Bold' : 'Inter-Bold',
}}>
  {t('serviceBooking')}
</Text>
```

The prototype uses Tajawal for Arabic interface text and Inter for English. Consistent typography helps distinguish interface hierarchy while maintaining readable labels.

## Build with reusable pieces

Sallehni includes reusable headers, garage cards, issue cards, a health gauge, service cards and history items. This reduces repeated interface code across the five screens.

The diagnostic results, for example, are represented as issue cards with descriptions, urgency levels and estimated repair costs. The booking view combines selectable dates and time slots with garage listings.

These are frontend interactions. A selected time slot updates the interface state; it does not submit a real appointment to a garage.

## Give controls a clear state

The Hijri/Gregorian calendar control uses a shared active-state toggle, and the time-slot buttons visually distinguish the selected slot.

Small controls deserve deliberate state design. A user should be able to see what is selected and understand what a click changes. The calendar toggle in this prototype changes its active control state; the sample booking dates are fixed rather than being a complete date-conversion or scheduling system.

Making this distinction explicit helps keep the interface demonstration honest and understandable.

## Keep prototype behavior visible

The diagnostic screen simulates a connection and a diagnostic process before displaying sample issues. Tracking and history also use sample records.

Some interface actions—such as garage details, certain filters and support actions—are placeholders. Some sample content remains Arabic after switching the interface labels to English.

Those boundaries point to meaningful next steps: connecting availability data, making translated sample content complete, and integrating actual service workflows. They are separate from the work already implemented in the UI.

## Make the work easy to try

Expo and React Native Web provide a browser-runnable version of the project. The published demo does not require an account, API key or local development setup.

Browser checks exercised Arabic/English switching, the five tabs, simulated diagnostic results, time-slot selection, the calendar toggle and support navigation. A platform-safe framework hook also avoids referencing `window` when it is not available in a native environment.

The quickest way to understand the project is to interact with it:

- [Open the Sallehni browser demo](https://hwq12331.github.io/Sallehni/)
- [View the source and setup instructions](https://github.com/hwq12331/Sallehni)

For me, the value of this prototype is in practicing how shared state, reusable components and language-aware presentation come together in a coherent service interface.
