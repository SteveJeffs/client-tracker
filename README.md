# Keystone Client Tracker

A client tracker I built in React for my web design business, [Keystone Digital](https://keystone-digital.co.uk). It keeps the admin for each client in one place: their status, website package, care plan, add-ons, domain renewal date and what needs doing next.

**Live demo:** https://stevejeffs.github.io/client-tracker/

All the client details in the demo are made up. Anything you add is saved in your own browser only, and **Reset demo** puts the original clients back.

## What it does

- Add, view, edit and delete clients
- Filter clients by status: Lead, Building, Live or Cancelled
- Works out how many days until each domain renews, flagging overdue renewals in red and ones due within 30 days in orange
- Shows when each client's three-month minimum care plan term ends, then switches to rolling monthly
- Saves everything in the browser with localStorage, so it's still there on the next visit
- Works on phones as well as desktop

## Built with

- React, set up with Vite
- JavaScript and CSS, with no UI libraries
- localStorage for saving data
- GitHub Actions, deploying to GitHub Pages on every push

## How it's put together

- `App.jsx` holds the client list in state and decides which screen to show
- `ClientCard`, `ClientDetail` and `AddClientForm` are the three main components. The same form handles both adding and editing a client
- `utils/dates.js` holds the date helpers: days until renewal, UK date formatting and the minimum term
- `data/options.js` holds the list of statuses, shared by the filter buttons and the form
- Shared design values like colours and corner sizes live as CSS variables in `index.css`

## What I learned

- Managing state with `useState`, and passing data and functions between components with props
- Turning a list of data into components with `.map()`, and narrowing it down with `.filter()`
- Controlled forms, including one form that works for both adding and editing
- Saving and loading data with `useEffect` and localStorage
- Date maths in JavaScript, including avoiding time zone slips around British Summer Time
- Reading error messages properly, including a build that worked on Windows but failed on GitHub because of one capital letter in an import

## Running it locally

```
npm install
npm run dev
```

## What's next

I'm planning a v2 that builds on this version.
