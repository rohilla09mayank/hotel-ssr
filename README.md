# Hotel Inc – Client Application

**Hotel Inc** is a modern, responsive client-facing web application that allows potential customers to explore and book luxury cabins. With seamless Google OAuth integration, users can easily sign in to manage their bookings, view past reservations, and access personalized features.

This project serves as the digital front door of Hotel Inc., offering an intuitive and elegant booking experience tailored for travelers.

---

## Key Features

- **Authentication with Google OAuth**  
  Secure and simple login via Google using **Auth.js** and **Supabase Auth**.

- **Cabin Listings & Details**  
  View available cabins with detailed descriptions, images, and pricing.

- **Real-time Availability & Booking**  
  Users can check availability and book cabins using an interactive date picker powered by **react-day-picker** and **date-fns**.

- **Reservation Management**  
  View, manage, or cancel upcoming and past reservations with ease.

- **Fully Responsive Design**  
  Mobile-first, accessible UI built with **Tailwind CSS** for optimal performance across devices.

- **Context-based State Management**  
  Clean and efficient global state management using **React Context API**.

---

## Tech Stack

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| **Next.js**          | Full-stack React framework             |
| **Tailwind CSS**     | Utility-first CSS styling              |
| **Supabase**         | Backend-as-a-Service (Database + Auth) |
| **Auth.js**          | Authentication handling (OAuth)        |
| **React Context**    | Global state management                |
| **date-fns**         | Date utilities                         |
| **react-day-picker** | Elegant date range picker UI           |

---

## Folder Structure

```bash
app/
├── _components/          # Reusable UI components
├── _context/             # Global state management
├── _lib/                 # Utility functions (actions, data fetching)
├── _styles/              # Global styles
├── about/                # About page routes and components
├── account/              # User account-related routes
│   └── profile/          # Profile view
│   └── reservations/     # View & edit reservations
│       └── edit/[bookingId]/  # Dynamic route for editing a booking
├── api/                  # API route handlers (Next.js API routes)
│   ├── auth/[...nextAuth]/   # Auth.js route handler
│   └── cabins/[cabinId]/     # Cabin-specific API endpoints
├── cabins/               # Public cabin listings
│   └── [cabinId]/        # Dynamic cabin detail page
│   └── thankyou/         # Thank-you page after successful booking
├── login/                # Login page and logic
├── layout.js             # Root layout component
├── loading.js            # Global loading screen
├── not-found.js          # Custom 404 page
├── page.js               # Home page route
public/                   # Static files (images, icons, etc.)
```
