<p align="center">
  <a href="#"><img src="https://capsule-render.vercel.app/api?type=rect&color=009ACD&height=100&section=header&text=CRM&fontSize=60%&fontColor=ffffff" alt="website title image"></a>
  <h2 align="center">👉 Customer relations management in MERN STACK👈</h2>
</p>


<p align="center">
<img src="https://img.shields.io/badge/language-React-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/language-MongoDB-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/language-Express-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/language-Nodejs-blue?style=for-the-badge">  
 </p>

## 📌 Introduction

Customer relations management tool built in MERN stack.

## Deployed Website : https://crm-app-sj.netlify.app

## Github Repositories

Frontend Link : https://github.com/Sathyanarayanan-R/CRM-App/tree/main/client

Backend Link : https://github.com/Sathyanarayanan-R/CRM-App/tree/main/server2

# Credentials to try out the app :

### For Admin Sign in

email : admin@gmail.com

password: admin1

### For Manager Sign in

email : manager@gmail.com

password: manager1

### For Employee Sign in

email : employee@gmail.com

password: employee1

## ⭐ Features of the app
Three sections of this app:-
- Employer (access the details about service requested, leads, contacts)
  - Service Request:
    Contains details of the service requested from the employer:-
    1. Title: Contains name of the service.
    2. Client: Client name
    3. Manager: Manager name
    4. Expected Closing: closing date
    5. Priority: priority of task
    6. Status: status of task
    7. Expected Revenue
    8. Probability

  - Lead:
    Contains details of lead of the service. Each lead contains:-
    1. Title: name of the lead.
    2. Client: client name.
    3. Number
    4. Status

  - Contact:
    Contains contact details and each contact contains:-
    1. Title: name of contact.
    2. Client: name of client.
    3. Number: phone number.
    4. Email
    5. Address
  

- Manager (manage employer)
  - Contains the following tabs:-
    - Service Request
    - Lead
    - Contacts  
  
  - Fields of all these three are same as for employee. Manager has following functions:-
    1. Manager can update and add service request for employees.
    2. Manager can update and add leads.
    3. Manager can update and add contacts.


- Admin (manage both employer and manager)
  - Contains the following tabs:-
    - Service Request
    - Leads
    - Contacts
    - All Users

  - Admin has following features:-
    1. Admin can add and remove users (employee, manager, admin).
    2. Admin can update and add service request for employees.
    3. Admin can update and add leads.
    4. Admin can update and add contacts.

 - If any leads or service requests created, it should trigger an email to manager & admin
 - Displays the created total count of service requests, leads, contacts
 - Forgot Password Page for Admin, Manager & Employee
