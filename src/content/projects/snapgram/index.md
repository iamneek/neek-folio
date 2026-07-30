---
title: "Snapgram"
description: "Django image sharing social webapp."
date: "Jun 5 2026"
demoURL: "https://snapgram-k2zw.onrender.com/"
repoURL: "https://github.com/iamneek/snapgram"
---

A simple Instagram-like social media web app built with Django. Users can sign up, share photo posts, like and comment on posts, and manage their profiles.

**Live Demo:** [snapgram-k2zw.onrender.com](https://snapgram-k2zw.onrender.com/)

## Screenshots

<img width="1347" height="689" alt="image" src="https://github.com/user-attachments/assets/fcfe0745-1776-4a4c-b259-b9e657a80342" />


&nbsp;

<img width="1333" height="678" alt="image" src="https://github.com/user-attachments/assets/159a51fd-b497-4ecc-96d0-a0c880f85318" />


&nbsp;

<img width="1340" height="674" alt="image" src="https://github.com/user-attachments/assets/30f0aa59-52fc-4e79-865b-4c4a6d31b42b" />


&nbsp;

## Features

- User registration, login, and logout
- Custom user profiles with bio and avatar
- Create, view, and delete photo posts
- Like and unlike posts
- Comment on posts and delete your own comments
- Paginated feed of recent posts
- User search
- HTMX-powered interactions (likes, comments, pagination) without full page reloads

## Tech Stack

- **Backend:** Django 6, Python 3.13
- **Database:** PostgreSQL
- **Storage:** Cloudinary (for post images and avatars)
- **Frontend:** Django templates, Tailwind CSS, DaisyUI, HTMX
- **Server:** Gunicorn + WhiteNoise
- **Deployment:** Docker on Render

## Setup

Read the setup guide from the repo: [Snapgram](https://github.com/iamneek/snapgram.git)
