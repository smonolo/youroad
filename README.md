# YouRoad made by Stefano Monolo

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

- Frontend: `youroad.smnl.dev`
- Backend: `api.youroad.smnl.dev`

#### Supabase

I'm using a personal Supabase organization for this project. If you want to find out more about how it was implemented, feel free to reach out to me and I'll add you to the team.

Anyways, only effective data is hosted on Supabase. The code implementation can be reviewed on this repostiory without being in need of external access.
