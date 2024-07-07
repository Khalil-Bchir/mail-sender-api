# Mail Sender API

This is a simple mail-sending API built with Node.js. It uses SMTP for sending emails.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Khalil-Bchir/mail-sender-api.git
   cd mail-sender-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```plaintext
   SMTP_HOST=smtp.example.com
   SMTP_USER=your_username
   SMTP_PASS=your_password
   ```

4. Start the server:

   ```bash
   node server.js
   ```

### Usage

To test the endpoint, you can use Postman or any other API testing tool.

1. Send a POST request to:

   ```
   http://localhost:3000/api/send-email
   ```

2. Use the following JSON body:

   ```json
   {
     "sender": "sender@example.com",
     "subject": "Test Email from Postman",
     "recipient": "recipient@example.com",
     "html": "<h1>Hello from Postman</h1><p>This is a test email sent from Postman using the API.</p>"
   }
   ```

### API Endpoint

- **POST** `/api/send-email`

  Sends an email using the provided details.

  #### Request Body

  - `sender` (string): The email address of the sender.
  - `subject` (string): The subject of the email.
  - `recipient` (string): The email address of the recipient.
  - `html` (string): The HTML content of the email.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
