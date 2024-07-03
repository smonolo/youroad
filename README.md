# YouRoad by Stefano Monolo

WeRoad Technical Case for the Frontend Engineer (Junior to Mid level) position.

## Introduction

YouRoad is a management platform that allows creating, editing and deleting travels and bookings. The dashboard contains pages dedicated to listing and managing travels, as well as filling forms to create bookings for a customer.

## Technical Implementation & Stack

### Technical Stack

#### Frontend

The project uses Vue and Nuxt, backed by Tailwind CSS and TypeScript. Prettier is used to format the whole codebase and `prettier-plugin-tailwindcss` is also installed and enabled to clean up classes, especially when they are quite long.

#### Backend

Forms and data are managed by an Express-based server, also backed by TypeScript. Data is stored on a Supabase database instance, with the help of Prisma as ORM to connect the two parts together.

#### General

The project uses NPM (v.10.8.1) and Node.js (v.20.11.0). Code is hosted on GitHub on a private repository that can be accessed upon request. The repository could eventually be made public if needed.

### Technical Implementation

The above stack was chosen based on what I usually use for my side and personal projects. I also set up a demo environment to quickly show you how the whole project works without being in need of cloning the repository, setting up the local environment and creating a personal Supabase organization.

#### Demo

- Frontend: [youroad.smnl.dev](https://youroad.smnl.dev)
- Backend: [api.youroad.smnl.dev](https://api.youroad.smnl.dev)

#### Supabase

I'm using a personal Supabase organization for this project. If you want to find out more about how it was implemented, feel free to reach out to me and I'll add you to the team.

Anyways, only effective data is hosted on Supabase. The code implementation can be reviewed on this repostiory without being in need of external access.

## Project Details

### Features

#### Required Features

As requested, the project includes the following fully functional features:

- Dedicated page with table to list and manage travels
- Form to create a new travel in a modal
- Form to edit an existing travel in a modal
- Button to delete an existing travel
- Dedicated page with table to list and manage bookings
- Wizard form with steps to create a new booking
- Wizard form with steps to edit an existing booking
- Button to delete an existing booking

#### Additional features

In addition to the points above, I added a few minor features that make the overall project be more complete:

- Landing dashboard with links to the dedicated pages for travels and bookings
- Show buttons that open a modal featuring a nicer read-only version of specific items
- Simple client-side form validations to avoid sending incomplete data to the API
- Simple Express-based API connected to a PostgreSQL database with enough endpoints to support all mentioned actions
- Mobile responsiveness with no particual behavior but layout adjustement on all pages
- A few unit tests to make sure everything works perfectly

### YouRoad

I decided to call this project YouRoad as a clear reference to the company, and also to be able to make a fun implementation with a friend of mine who's a graphic designer. I asked him to create a very quick branding sheet, so I could put some logos into the website. So far I only used the favicon, but I'll leave the result here.

![YouRoad branding sheet made by Simone Caruso](https://cdn.smnl.it/wpjkfkYufz.png)
