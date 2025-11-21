# ** Download Bar Demo **

This project demonstrates how to create a dynamic download bar in JavaScript using setTimeout and setInterval. The bar simulates a download process where the total download time is randomized, and the progress fills up smoothly based on that duration.

## 📋 What You'll Learn

- How to use setInterval for periodic updates.

- How to use setTimeout for handling timeouts and completion events.

- Controlling animation speed dynamically based on random duration.

- Basic DOM manipulation for UI feedback.

## 💡 How It Works

### Random Time Generation:

Each time you start the download, the script generates a random time between 50 and 100 ms to simulate varying network speeds.

### Progress Bar Logic:

- The bar fills from 0% to 100% over the randomized duration.

- Progress updates at random intervals.

- When the time is up, the progress jumps to 100%, and the bar shows "Download Complete!".

![DEMO](./Task_Images/Screenshot%202025-11-21%20at%207.46.27 PM.png)
