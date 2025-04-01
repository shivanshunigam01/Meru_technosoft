<h1>Registration API</h1> 
<p>endpoint: localhost:9090/api/auth/register</p>
<p>Body: {
  "name": "Subham Saha",
  "email": "subham.saha@gmail.com",
  "password": "Subham@123",
  "passwordConfirm": "Subham@123"
}</p>

response ss:
![image](https://github.com/user-attachments/assets/63983f82-0617-4962-a1ee-75ec721ef75b)


<h1>Login API</h1> 
<p>endpoint: localhost:9090/api/auth/login</p>
<p>Body: {
  "email": "subham.saha@gmail.com",
  "password": "Subham@123"
}</p>

response ss:
![image](https://github.com/user-attachments/assets/1db45621-67e8-457e-a9a6-991129f4d5e9)


<h1>Get User Profile</h1> 
<p>endpoint: localhost:9090/api/auth/getUserProfile</p>
<p>Header: {x-access-token: given token}</p>

response ss:
![image](https://github.com/user-attachments/assets/b94bb605-c90e-4b62-8dfb-400c04e9aa5b)
