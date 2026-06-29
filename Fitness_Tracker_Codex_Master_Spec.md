# Fitness Tracker PWA -- Codex Master Specification

## Overview

Build a production-quality Progressive Web App (PWA) named **Fitness
Tracker** for personal use.

Primary goals:

-   Hosted on GitHub Pages
-   100% free
-   Optimized for iPhone 15
-   Offline-first
-   Google Sheets used as the cloud backend via Google Apps Script
-   Long-term analytics and progress tracking

------------------------------------------------------------------------

# Technology Stack

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   React Router
-   Zustand
-   Dexie (IndexedDB)
-   Chart.js
-   Framer Motion
-   Heroicons
-   React Hook Form
-   vite-plugin-pwa
-   ESLint
-   Prettier
-   Vitest
-   React Testing Library

------------------------------------------------------------------------

# Architecture

    PWA
    ↓
    IndexedDB (offline-first)
    ↓
    Sync Queue
    ↓
    Google Apps Script REST API
    ↓
    Google Sheets

Always save locally first.

Sync automatically when online.

Never lose user data.

------------------------------------------------------------------------

# Application Pages

-   Dashboard
-   Calendar
-   Workouts
-   Analytics
-   History
-   Settings

------------------------------------------------------------------------

# Dashboard

Display:

-   Today's Date
-   Completion %
-   Current Streak
-   Longest Streak
-   Sync Status
-   Today's Workout
-   Daily Goals

Daily tracking:

-   Walk
-   Strength
-   Stretching
-   Weight
-   Calories
-   Protein
-   Fiber
-   Water
-   Sleep
-   Mood
-   Energy
-   Steps
-   Notes

------------------------------------------------------------------------

# Workout Library

Include:

-   Strength A
-   Strength B
-   Stretching
-   Walking

Every exercise should include:

-   Description
-   Benefits
-   Muscle Groups
-   Sets
-   Reps
-   Rest Timer
-   YouTube Link
-   Personal Notes
-   Form Tips
-   Common Mistakes

Exercise metadata should come from JSON.

------------------------------------------------------------------------

# Weekly Measurements

Track:

-   Weight
-   Waist
-   Chest
-   Hips
-   Left Arm
-   Right Arm
-   Left Thigh
-   Right Thigh
-   Neck
-   Body Fat %
-   Weekly Notes

------------------------------------------------------------------------

# Monthly Progress

Store metadata for:

-   Front Photo
-   Side Photo
-   Back Photo
-   Relaxed Front

Store images locally.

Prepare architecture for future Google Drive sync.

------------------------------------------------------------------------

# Analytics (App)

Charts:

-   Weight
-   Calories
-   Protein
-   Fiber
-   Water
-   Sleep
-   Steps
-   Workout Completion
-   Walking Minutes
-   Strength Sessions
-   Measurements
-   Mood
-   Energy
-   Weekly %
-   Monthly %

Show:

-   Current Streak
-   Longest Streak
-   Average Protein
-   Average Calories
-   Average Water
-   Average Sleep
-   Average Steps

------------------------------------------------------------------------

# Google Sheets

Automatically create sheets:

-   Dashboard
-   DailyLogs
-   WeeklyMeasurements
-   MonthlyPhotos
-   Goals
-   ExerciseNotes
-   Achievements
-   SyncLog
-   Charts
-   Calculations
-   Settings

------------------------------------------------------------------------

# Google Sheets Dashboard

Automatically generate:

Summary cards:

-   Current Weight
-   Weight Change
-   Completion %
-   Current Streak
-   Longest Streak
-   Average Calories
-   Average Protein
-   Average Water
-   Average Sleep
-   Average Steps
-   Average Mood
-   Average Energy

Automatic charts:

-   Weight Trend
-   Calories Trend
-   Protein Trend
-   Water Trend
-   Sleep Trend
-   Steps Trend
-   Workout Completion
-   Walking Minutes
-   Measurements
-   Weekly Consistency
-   Monthly Consistency

Pivot Tables:

-   Workouts by Week
-   Workouts by Month
-   Nutrition by Month
-   Measurements by Month

Conditional Formatting:

-   Goal Met
-   Goal Missed
-   Low Sleep
-   Workout Missed
-   Weight Trend
-   Water Goal
-   Broken Streak

Use formulas:

-   QUERY
-   FILTER
-   ARRAYFORMULA
-   COUNTIFS
-   SUMIFS
-   AVERAGEIFS
-   SPARKLINE
-   SORT
-   UNIQUE

Generate automatic:

-   Monthly Report
-   Yearly Report
-   Goal Comparison
-   Insight Cards

Example insights:

-   Protein goal consistency
-   Sleep improvement
-   Walking consistency
-   Weight lost
-   Best week
-   Best month

------------------------------------------------------------------------

# Google Apps Script

Generate complete Apps Script project.

Endpoints:

-   GET
-   POST
-   UPDATE
-   DELETE
-   Batch Sync

Include:

-   initializeSpreadsheet()
-   Automatic sheet creation
-   Header generation
-   Charts
-   Pivot tables
-   Formatting
-   Data validation
-   Formula generation
-   CORS support

------------------------------------------------------------------------

# Sync Engine

Features:

-   Offline Queue
-   Retry
-   Conflict Detection
-   Last Modified timestamps
-   Incremental Sync
-   Manual Sync
-   Auto Sync
-   Sync Status

------------------------------------------------------------------------

# Data Export

Support:

-   CSV
-   JSON
-   Printable Monthly Report

------------------------------------------------------------------------

# Achievements

-   7 Day Streak
-   30 Day Streak
-   100 Walks
-   50 Strength Sessions
-   Protein Master
-   Hydration Master
-   Perfect Week

------------------------------------------------------------------------

# Future Integrations

Design architecture for:

-   Apple Health
-   Google Fit
-   Garmin
-   Fitbit
-   Cronometer
-   MyFitnessPal
-   Google Drive Photos
-   AI Coach
-   Push Notifications

------------------------------------------------------------------------

# Milestones

1.  Project Setup
2.  UI & Navigation
3.  IndexedDB
4.  Google Apps Script + Sheets Sync
5.  Dashboard
6.  Workout Library
7.  Calendar
8.  Analytics
9.  Google Sheets Dashboard
10. PWA
11. Testing
12. Deployment

Each milestone must compile successfully before proceeding.

------------------------------------------------------------------------

# Coding Standards

-   Strict TypeScript
-   SOLID
-   Repository Pattern
-   Service Layer
-   Reusable Components
-   No duplicated code
-   Production-ready quality
-   Optimized for long-term maintenance
