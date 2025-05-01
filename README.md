# 🐾 Postman API Testing – Swagger Petstore

This project demonstrates API testing using Postman on the Swagger Petstore API. It includes a collection of requests with validations to test core functionality, simulate real API usage, and ensure consistent behavior.

## 📌 Overview

- Performed testing on multiple endpoints of the [Swagger Petstore API](https://petstore.swagger.io/).
- Focused on key operations such as creating, retrieving, updating, and deleting pets.
- Used Postman’s built-in scripting capabilities to automate tests and verify responses.

## 🧪 Tested Endpoints

- `POST /pet` – Add a new pet
- `GET /pet/{petId}` – Find pet by ID
- `PUT /pet` – Update existing pet
- `DELETE /pet/{petId}` – Delete a pet
- `GET /pet/findByStatus` – Find pets by status

## 🔧 Features & Validations

- Assert status codes (e.g., 200, 201, 404)
- Validate response body and key fields
- Handle dynamic data using variables
- Chained requests using saved data from previous responses

## 🚀 Tools Used

- **Postman** – For API requests and testing
- **Swagger Petstore** – Public API for testing
- **JavaScript (Postman scripts)** – For writing test validations

