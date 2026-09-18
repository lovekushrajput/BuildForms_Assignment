now give the file redeme file

# Production Control Dashboard

## About the Project
Production Control Dashboard is a simple factory management dashboard.

It helps an operations manager view production jobs, check their status, see due dates, and know which machine is assigned to each job.

The dashboard also allows searching, filtering, sorting, viewing job details, and updating the job status.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui


## Features

- View all production jobs in a table
- Search by Job ID, product name, or customer
- Filter jobs by status
- Sort jobs by due date or quantity
- View job details in a side panel
- View assigned machine
- View notes and issues
- Update job status
- Summary cards for:
  - Total Jobs
  - Delayed Jobs
  - Due Soon
  - Completed Jobs
- Responsive layout
- Local mock data

## Setup

Clone the repository:

```bash
git clone git@github.com:lovekushrajput/BuildForms_Assignment.git

Go to the project folder:

cd production-control-dashboard

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000

## Project Structure

app/
  page.tsx
  layout.tsx
  globals.css

components/
  DashboardHeader.tsx
  SummaryCards.tsx
  JobFilters.tsx
  JobsTable.tsx
  JobRow.tsx
  JobDetailPanel.tsx

components/ui/
  shadcn/ui components

data/
  jobs.ts

types/
  jobs.ts

## Component Structure

DashboardHeader - Shows the dashboard title and short description.
SummaryCards - Shows the main production job numbers.
JobFilters - Handles search, status filter, and sorting.
JobsTable - Displays the list of production jobs.
JobRow - Displays the information for one job.
JobDetailPanel - Shows the selected job details and allows the status to be updated.
data/jobs.ts - Contains the local mock job data.
types/jobs.ts - Contains the TypeScript types used in the project.
page.tsx - Handles the main state, filtering, sorting, job selection, and status updates.

## Assumptions

I used local mock data because a backend was not required.
No database or authentication is used.
A job can have four statuses: Pending, In Progress, Delayed, and Completed.
Status changes are stored only while the application is running.
Each job has one assigned machine.
I considered jobs due within the next two days as "Due Soon".

## What I Would Improve With More Time

Connect the dashboard to a real backend and database.
Add real machine status and maintenance information.
Add better loading and error states.
Add pagination for a larger number of jobs.
Improve date formatting.
Add more detailed issue tracking.
Add user permissions for changing job status.
Add tests for the main dashboard features.