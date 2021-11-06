// const mail = require('@sendgrid/mail');

// export default async (req, res) => {
//   res.status(200).json({ status: 'Ok' })

//   mail.setApiKey(process.env.SENDGRID_API_KEY);

//   const body = JSON.parse(req.body);

//   console.log('body', body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Phone: ${body.phone}\r\n
//     Website Url: ${body.homepage}\r\n
//     Business Name: ${body.business_name}\r\n
//     Business Category: ${body.business_category}\r\n
//     Message: ${body.message}\r\n
//   `;

//   await mail.send({
//     to: 'chandrakanth@socialprachar.com',
//     from: 'no-reply@vajra.ai',
//     subject: 'New Response from Vajra Site!',
//     text: message,
//     html: message.replace(/\r\n/g, '<br>'),
//   }).then(() => {
//     res.status(200).json({ status: 'Ok' });
//   });
// }
  

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    await sendgrid.send({
      to: 'ccmchandrakanth5@gmail.com',
      from: 'no-reply@vajra.ai',
      subject: 'Serverless Functions',
      text: 'Hello, world!'
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};