# IPL JS Project

A Node.js project that processes IPL cricket data from CSV files and generates JSON reports.

---

# Project Objective

This project analyzes IPL match data and generates the following statistics:

1. Number of matches played per year
2. Number of matches won per team per year
3. Extra runs conceded per team in 2016
4. Top 10 economical bowlers in 2015

---

# Technologies Used

- JavaScript
- Node.js
- CSV to JSON
- Git & GitLab

---

# Project Structure

```bash
IPL-JS-Project/
│
├── data/
│   ├── matches.csv
│   └── deliveries.csv
│
├── output/
│   ├── matchesPerYear.json
│   ├── matchesWonPerTeamPerYear.json
│   ├── extraRuns2016.json
│   └── topEconomicalBowlers2015.json
│
├── src/
│   ├── index.js
│   │
│   └── server/
│       ├── 1-matches-per-year.js
│       ├── 2-matches-won-per-team-per-year.js
│       ├── 3-extra-runs-2016.js
│       └── 4-top-economical-bowlers-2015.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <your-gitlab-repository-url>
```

Move into project folder:

```bash
cd IPL-JS-Project
```

Install dependencies:

```bash
npm install
```

---

# Run the Project

Execute:

```bash
node src/index.js
```

---

# Output

Generated JSON files will be available in:

```bash
output/
```

---

# Features

- CSV data parsing
- JSON generation
- Modular code structure
- IPL data analysis
- Node.js file handling

---

# Concepts Used

- Array methods
  - map()
  - filter()
  - forEach()
  - sort()

- File System Module
- Modular Programming
- JSON Handling
- Data Transformation

---

