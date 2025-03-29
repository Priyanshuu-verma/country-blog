# Country Blog Website

A web application that provides detailed information about countries using the [REST Countries API](https://restcountries.com/).

## Features

- Search for countries by name
- View country details (flag, population, region, subregion, capital, etc.)
- Filter countries by region
- Dark mode support
- Responsive design
 ## Live Preview
[Web Link](https://country-blog-web.onrender.com).

## Tech Stack

### Frontend
- React.js
- Next.js (Optional)
- Tailwind CSS / Bootstrap
- Axios (for API requests)



### API
- REST Countries API

### Development Tools
- Git & GitHub
- VS Code


## Installation

### Prerequisites
- Node.js installed
- Git installed

### Steps to Run

1. Clone the repository:
   bash
   git clone https://github.com/Rishabh0426/Country-blog-web/
   cd country-blog
   

2. Install dependencies:
   bash
   npm install
   

3. Start the development server:
   bash
   npm start
   

4. Open your browser and visit:
   
   http://localhost:5173
   

## API Usage

Fetching country details example:
javascript
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching countries:', error));

## Screeshots
![Screenshot 2025-03-29 140038](https://github.com/user-attachments/assets/2ce57f60-d6ba-4f46-969d-cbdbe12b49b4)
![Screenshot 2025-03-29 140116](https://github.com/user-attachments/assets/da4759c4-e329-45c2-ac3c-69db2ba9fcde)
![Screenshot 2025-03-29 140059](https://github.com/user-attachments/assets/d9a72281-ac6a-4239-9210-05e623efc9c9)
![Screenshot 2025-03-29 140318](https://github.com/user-attachments/assets/ba04c7b4-c4ee-40df-a028-b87cf4b72658)





## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

