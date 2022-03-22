import { google } from 'googleapis';

async function handler(req, res) {

  if (req.method === 'POST') {
    const { name, email, phone, homepage, bot_before, business_name, business_category, message, timestamp } = req.body;
    console.log(name, email, phone, homepage, timestamp);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '10IZDUYicBydkIY8qxB_3LaC0CKX_OjbO8VByE5oBcQQ',
      range: 'Sheet1!A2:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone, homepage, timestamp]],
      },
    });

    return res.status(201).json({ message: 'It works!', response });
  }
  res.status(200).json({ message: 'Hey!' });
}

export default handler;
