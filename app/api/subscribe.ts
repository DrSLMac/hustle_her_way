import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Replace 'YOUR_SYSTEME_IO_API_KEY' with your actual systeme.io API key
      const apiKey = 'SYSTEME_AUDIENCE_ID';
      const apiUrl = `https://api.systeme.io/lists/${process.env.SYSTEME_API_KEY}/subscribers`;

      const response = await axios.post(apiUrl, { email }, {
        headers: {
          'Api-Token': apiKey,
        },
      });

      if (response.data.success) {
        res.status(200).json({ success: true, message: 'Email subscribed successfully!' });
      } else {
        res.status(400).json({ success: false, message: 'Failed to subscribe email!' });
      }
    } catch (error) {
      console.error('Error subscribing email:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}