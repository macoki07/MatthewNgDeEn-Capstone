# **MatthewNgDeEn-Capstone**  
Heicoder's SE100 Capstone Project  

**GitHub Pages Link**: https://macoki07.github.io/MatthewNgDeEn-Capstone/

## **Overview**  
This project is a **stock tracker** built using **ReactJS** and **Tailwind CSS**. It allows users to add and remove stocks while fetching stock details using **AlphaVantage's free API**. The application also persists data using **LocalStorage**, ensuring that stock details are not lost upon refresh. It is **hosted on GitHub Pages** for easy access.  

## **Features**  
- **Add/Remove Stocks** – Manage your stock list effortlessly.  
- **Fetch Stock Details** – Uses **AlphaVantage API** (limited to 25 calls per day).  
- **Persistent Storage** – Stock details are saved in **LocalStorage**.  
- **Real-time Notifications** – Uses **React Hot Toast** for responsive toast messages.  
- **Hosted on GitHub Pages** – Easily accessible online. 

## **Tech Stack**  
- **Frontend:** ReactJS, Tailwind CSS  
- **State Management:** LocalStorage  
- **API:** AlphaVantage  
- **UI Notifications:** React Hot Toast  
- **Deployment:** GitHub Pages  

## **Setup & Installation (to run locally)**  
1. Clone the repository:  
   ```sh
   git clone https://github.com/MatthewNgDeEn/MatthewNgDeEn-Capstone.git
   cd MatthewNgDeEn-Capstone/MatthewNgDeEn-Capstone
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Create a `.env` file in the root directory and add your **AlphaVantage API Key**:  
   ```
   ALPHA_VANTAGE_API_KEY=your_api_key_here
   ```  
4. Start the development server:  
   ```sh
   npm run dev
   ```  
5. Open [http://localhost:5173](http://localhost:5173) in your browser.  

