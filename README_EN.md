# Test API Integration Project

This project demonstrates HTTP communication skills and data processing capabilities.

## About

The program performs the following tasks:

1. Sends a POST request to get the first part of the code
2. Receives the second part through a webhook
3. Concatenates both parts of the code
4. Sends a GET request to retrieve the final result

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ibrohim0924/TestAPI.git
cd TestAPI
```

2. Install dependencies:
```bash
npm install
```

3. Get a URL from webhook.site:
   - Go to [webhook.site](https://webhook.site/)
   - Copy the unique URL provided
   - Paste the URL into `requestData.url` in `index.js`

## Usage

1. Run the program:
```bash
npm start
```

2. The program works in the following sequence:
   - Sends initial POST request and receives first part of the code (`part1`)
   - A new request appears on webhook.site containing the second part (`part2`)
   - Enter `part2` into the program
   - Program combines both parts and retrieves final result via GET request

## Technical Details

- **API URL**: https://test.icorp.uz/interview.php
- **Request Types**:
  - POST: For getting the first part of the code
  - GET: For retrieving the final result
- **Webhook**: For receiving the second part of the code

## Technologies Used

- Node.js
- Axios (for HTTP requests)
- Webhook.site (for callback URL)

## Troubleshooting

If you encounter any issues when running the program:

1. Check your internet connection
2. Ensure the webhook.site URL is entered correctly
3. Verify that all code parts are copied correctly

## License

MIT