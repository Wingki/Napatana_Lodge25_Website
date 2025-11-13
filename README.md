# Napatana Lodge Website

This is the source code for the official website of Napatana Lodge, located in Alotau, Milne Bay Province, Papua New Guinea. The site is a modern, responsive single-page application designed to showcase the lodge's beauty and amenities.

---

## Key Features

- **Responsive Design:** Looks great on desktops, tablets, and mobile phones.
- **Interactive Sections:** Smooth scrolling navigation to different parts of the page (About, Rooms, Dining, etc.).
- **Room Showcase:** Detailed view of accommodations with an image gallery for each room.
- **Interactive Dining Menu:** Tabbed menu for Breakfast, Lunch, and Dinner with clickable images.
- **Booking Simulation:** A multi-step modal to simulate the booking and payment process.
- **Dynamic Components:** Sections for Activities, Guest Testimonials, and Staff introductions.

---

## How to Customize Your Website Content

This guide will help you update the images and text on your website. All changes are made directly in the code files.

### 1. How to Change Images

The images on the website are loaded from URLs. To use your own photos (e.g., from your computer or Facebook page), you need to first upload them to an image hosting service to get a public URL.

**Recommended Free Service:** [Cloudinary](https://cloudinary.com/users/login) or [Imgur](https://imgur.com/upload)

**Steps:**

1.  Upload your photo to a service like Cloudinary.
2.  After uploading, the service will give you a public URL (it usually ends in `.jpg` or `.png`). Copy this URL.
3.  Find the file listed below that contains the image you want to replace.
4.  Paste your new URL in place of the old one.

**Image Locations:**

-   **Main Welcome Page Image:**
    -   File: `components/Hero.tsx`
    -   Find the line with `backgroundImage: "url('...')"` and replace the URL inside the quotes.

-   **Lodge Logo in Header:**
    -   File: `components/Header.tsx`
    -   Find the `<img>` tag and replace the `src="..."` URL.

-   **Room Photos & Gallery:**
    -   File: `components/Rooms.tsx`
    -   Look for the `roomsData` array. Each room has an `imageUrls` list. Replace the URLs in this list. The first image is the main one displayed.

-   **Dining Section Buffet Photo:**
    -   File: `components/Dining.tsx`
    -   Find the `<img>` tag and replace the `src="..."` URL.

-   **Dining Menu Item Photo (e.g., Grilled Fish):**
    -   File: `components/Dining.tsx`
    -   Look for the `menuData` object. Find the `dinner` section and the specific menu item. Replace the `image:` URL.

-   **Waterfront Bar Photo:**
    -   File: `components/Bar.tsx`
    -   Find the `<img>` tag and replace the `src="..."` URL.

-   **Activities Photos:**
    -   File: `components/Activities.tsx`
    -   Look for the `activities` array and replace the `image:` URLs.

-   **Staff Group Photo & Individual Portraits:**
    -   File: `components/Staff.tsx`
    -   For the group photo, find the `<img>` tag for "The Napatana Lodge Team".
    -   For individual photos, look for the `staffData` array and replace the `image:` URLs.

### 2. How to Change Text

All the text on the website is written directly in the code. To edit it, open the relevant file and change the text you see.

**Text Locations:**

-   **About Section:** `components/About.tsx`
-   **Room Names & Descriptions:** `components/Rooms.tsx` (in the `roomsData` array)
-   **Dining/Bar Descriptions & Menu Items:** `components/Dining.tsx` and `components/Bar.tsx`
-   **Activities Descriptions:** `components/Activities.tsx` (in the `activities` array)
-   **Guest Testimonials:** `components/Testimonials.tsx` (in the `testimonialsData` array)
-   **Staff Names & Roles:** `components/Staff.tsx` (in the `staffData` array)
-   **Contact Info & Footer:** `components/Footer.tsx`
