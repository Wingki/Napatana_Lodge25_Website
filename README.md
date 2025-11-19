# Napatana Lodge Website

This is the source code for the official website of Napatana Lodge, located in Alotau, Milne Bay Province, Papua New Guinea. The site is a modern, responsive single-page application designed to showcase the lodge's beauty and amenities.

---

## Key Features

- **Responsive Design:** Looks great on desktops, tablets, and mobile phones.
- **Dynamic Content Management:** A built-in, browser-based Admin Panel allows for easy editing of all website text and images.
- **Interactive Sections:** Smooth scrolling navigation to different parts of the page (About, Rooms, Dining, etc.).
- **Room Showcase:** Detailed view of accommodations with an image gallery for each room.
- **Interactive Dining Menu:** Tabbed menu for Breakfast, Lunch, and Dinner with clickable images.
- **Booking Simulation:** A multi-step modal to simulate the booking and payment process.
- **Dynamic Components:** Sections for Activities, Guest Testimonials, and Staff introductions.

---

## How to Manage Website Content (Admin Panel)

This website includes a simple, password-protected admin panel to manage all its content directly in the browser.

### 1. Accessing the Admin Panel

-   Navigate to your website's URL and add `#admin` to the end (e.g., `your-website-url.com/#admin`).
-   You can also click the "Admin" link in the website footer.
-   You will be prompted to enter a password. The password is: `admin123`

### 2. Using the Admin Panel

-   Once logged in, you will see a navigation sidebar with all the editable sections of the website (About, Rooms, Dining, etc.).
-   Click on a section to load its content into an editor form.
-   Make any changes you need in the form fields.
-   Click the "Save Changes" button at the bottom of the form. A confirmation message will appear.
-   To see your changes live, click the "View Site" link at the top of the admin panel.

**Important Note:** All changes are saved to your browser's **local storage**. This means the changes are only visible on the computer and browser you used to make them. It does not update the website for all visitors. Clearing your browser's data will reset the content to its original state.

### 3. How to Change Images

The images on the website are loaded from URLs. To use your own photos (e.g., from your computer or Facebook page), you need to first upload them to an image hosting service to get a public URL.

**Recommended Free Service:** [Cloudinary](https://cloudinary.com/users/login) or [Imgur](https://imgur.com/upload)

**Steps:**

1.  Upload your photo to a service like Cloudinary.
2.  After uploading, the service will give you a public URL (it usually ends in `.jpg` or `.png`). Copy this URL.
3.  In the Admin Panel, find the image field you want to change.
4.  Paste your new URL in place of the old one and save.
