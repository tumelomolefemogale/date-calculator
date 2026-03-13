# Date Calculator

A simple browser-based tool that calculates the difference between two dates, broken down into years, months, weeks, days, hours, minutes, seconds, and milliseconds.

## Files

- `structure.html` — markup and structure
- `calculator.js` — date difference logic
- `style.css` — minimal styling

## Usage

Open `structure.html` in a browser. Select two dates and click **Submit**.

## How it works

The difference between the two dates is calculated in milliseconds, then broken down greedily from the largest unit (years) to the smallest (milliseconds).
