# Weather Forecast Visualization

This project visualizes weather forecast data using a React application with Chart.js. The application displays weather data, such as temperature and precipitation, in interactive bar and line charts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customization](#customization)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-forecast-visualization.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-forecast-visualization
   ```

3. **Install the dependencies:**

   Make sure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   This command will start the application and open it in your default browser at `http://localhost:3000`.

## Usage

The application fetches weather data and visualizes it using different chart types. The key components include:

- **RainGraph**: Displays a bar chart of precipitation data.
- **TemperatureGraph**: Displays a line chart of temperature data.

The graphs are interactive and provide a visual summary of the weather data.

## Project Structure

```
weather-forecast-visualization/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── RainGraph.js
│   │   ├── TemperatureGraph.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
├── package.json
└── ...
```

- **public/**: Contains the static assets and the HTML file.
- **src/**: Contains the React components, main entry points, and other JavaScript files.
- **components/**: Contains individual chart components like `RainGraph.js` and `TemperatureGraph.js`.

## Features

- **Interactive Charts**: The application uses Chart.js to display interactive bar and line charts.
- **Customizable Appearance**: The charts are styled with custom colors and settings.
- **Dynamic Data**: The application fetches weather data dynamically and updates the charts in real time.

### RainGraph

- Displays precipitation levels using a horizontal bar chart.
- Colors bars differently based on precipitation intensity (e.g., sunny, rainy, heavy rain).
- Provides axis labels with descriptive text.

### TemperatureGraph

- Displays temperature over time using a line chart.
- The area under the line is filled with color to represent temperature changes.
- Points on the line are highlighted with customizable colors.

## Customization

You can customize the following aspects of the charts:

- **Bar and Line Colors**: Adjust the `backgroundColor` and `borderColor` in the datasets.
- **Grid Lines and Borders**: Toggle visibility and styling of grid lines and borders in the chart options.
- **Axis Labels**: Customize the labels and ticks on both x and y axes.
- **Tooltip Styling**: Modify the tooltip appearance for better clarity.

### Example

To change the color of bars in `RainGraph`, modify the `backgroundColor` property in the `datasets` array:

```javascript
const backgroundColors = hourlyData.map(hour => {
    if (hour.precip_mm >= 9) {
        return 'rgb(10, 42, 89)'; // Dark blue for heavy rain
    }
    if (hour.precip_mm >= 2) {
        return 'rgba(111, 22, 174, 0.843)'; // Purple for rain
    }
    return 'rgba(143, 29, 225, 0.43)'; // Light purple for sunny
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
