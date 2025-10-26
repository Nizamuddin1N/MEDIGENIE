# MediGenie - Health Companion for Disease Prediction, Nutrition and Fitness

## Overview

MediGenie is a machine learning–powered web application that provides early disease prediction and personalized wellness recommendations.
It serves as a virtual health companion that connects AI insights with actionable guidance, including nutrition, home remedies, exercises, and expert videos.

---

## Key Features

* Disease prediction based on user-input symptoms
* Personalized recommendations for nutrition, home remedies, and exercises
* Secure user authentication using JWT
* Machine learning integration using Random Forest Classifier
* Interactive and responsive web interface built with React
* Expert videos section for user education and awareness

---

## System Architecture

Frontend: React.js
Backend: FastAPI / Express.js
Database: MongoDB
ML Model: Random Forest (Scikit-Learn)
API Routes: /predict-disease, /nutrition, /remedies, /exercises, /videos, /register, /login

### Process Flow

1. User fills a health questionnaire
2. Backend processes input and forwards it to the ML model
3. Model predicts the likely disease
4. Frontend displays results and health recommendations

---

## Tech Stack

| Layer           | Technology                           |
| --------------- | ------------------------------------ |
| Frontend        | React.js, Axios, TailwindCSS         |
| Backend         | Node.js, Express.js, FastAPI         |
| Database        | MongoDB                              |
| ML Libraries    | Scikit-Learn, Pandas, NumPy, Seaborn |
| Security        | JWT, Password Hashing                |
| Version Control | GitHub, GitBash                      |

---

## Machine Learning Details

* Model Used: Random Forest Classifier
* Techniques: SMOTE for data balancing, GridSearchCV for hyperparameter tuning
* Evaluation Metrics: Accuracy, Precision, Recall, F1-Score, Confusion Matrix
* Datasets Used:

  * Liver Disease
  * Anemia
  * Chronic Kidney Disease
  * Diabetes
  * Heart Disease
  * Hypertension
  * Stroke
  * Thyroid Disease

---

## Installation and Setup

### Prerequisites

Install the following before running the project:

* Node.js (version 18 or higher)
* Python (version 3.8 or higher)
* MongoDB (local or cloud)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Database Configuration

Add your MongoDB connection and secret key to the `.env` file:

```
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
```

---

## API Endpoints

| Endpoint         | Method | Description                           |
| ---------------- | ------ | ------------------------------------- |
| /predict-disease | POST   | Predicts disease based on form inputs |
| /nutrition       | GET    | Returns dietary recommendations       |
| /home-remedies   | GET    | Provides home remedy tips             |
| /exercises       | GET    | Suggests condition-specific exercises |
| /videos          | GET    | Returns educational videos            |
| /register        | POST   | Registers new user                    |
| /login           | POST   | Authenticates user                    |

---

## Model Performance

* Classification accuracy improved by approximately 15 percent compared to baseline models
* Cross-validation (cv=3) used for reliable evaluation
* SMOTE applied to handle data imbalance

---

## Challenges and Limitations

* Difficulty integrating the ML model with web API
* Inconsistent quality of some datasets
* Not a diagnostic-level model; only intended for educational and preventive purposes

---

## Future Enhancements

* Improve model accuracy with larger datasets
* Add multilingual support for wider accessibility
* Integrate verified medical professional advice
* Enable appointment and ambulance booking features
* Develop real-time health tracking using wearable data
* Expand AI to handle image and text-based inputs

---

## References

* Scikit-Learn Documentation
* React Documentation
* FastAPI Documentation
* WHO Guidelines, Healthline, WebMD
* Blogs: Towards Data Science, Analytics Vidhya

---

## Conclusion

MediGenie provides a complete end-to-end health companion system integrating disease prediction with actionable health guidance.
The project demonstrates effective AI integration in healthcare and contributes to preventive health awareness.
