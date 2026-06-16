import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, company, country, productCategory, comments, referenceNo: clientRef } = req.body;
    const referenceNo = clientRef || `GXXA-${Date.now().toString().slice(-6)}`;
    
    console.log(`New B2B Sourcing Inquiry received [Ref: ${referenceNo}]:`, req.body);

    const emailSubject = `Globexxa Sourcing Inquiry [Ref: ${referenceNo}] - ${company}`;
    
    const textBody = `
============================================================
NEW GLOBEXXA B2B INQUIRY DISPATCH
============================================================
Reference Number: ${referenceNo}

Full Name: ${name}
Organization/Company: ${company}
Email Address: ${email}
Phone Number: ${phone || "Not Provided"}
Country: ${country}
Product Interest: ${productCategory}

Requirements / Message:
------------------------------------------------------------
${comments}
------------------------------------------------------------
`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; border: 1px solid #E2E8F0; padding: 24px;">
        <h2 style="color: #1E5128; border-bottom: 2px solid #1E5128; padding-bottom: 8px; margin-top: 0;">New Globexxa B2B Inquiry</h2>
        <p style="font-size: 11px; color: #64748B; font-family: monospace; margin-bottom: 20px;">Reference Number: <strong>${referenceNo}</strong></p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 150px; font-size: 13px; color: #64748B; text-transform: uppercase;">Full Name:</td>
            <td style="padding: 6px 0; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #64748B; text-transform: uppercase;">Organization:</td>
            <td style="padding: 6px 0; font-size: 14px;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #64748B; text-transform: uppercase;">Email Address:</td>
            <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2456A6; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #64748B; text-transform: uppercase;">Phone Number:</td>
            <td style="padding: 6px 0; font-size: 14px;">${phone || "<em>Not Provided</em>"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #64748B; text-transform: uppercase;">Country:</td>
            <td style="padding: 6px 0; font-size: 14px;">${country}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #64748B; text-transform: uppercase;">Product Interest:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #1E5128; font-size: 14px;">${productCategory}</td>
          </tr>
        </table>

        <div style="background-color: #F8FAFC; border-left: 4px solid #7C8E7C; padding: 16px; margin-top: 20px;">
          <h4 style="margin: 0 0 8px 0; font-size: 12px; color: #64748B; text-transform: uppercase;">Requirements & Message:</h4>
          <p style="margin: 0; font-size: 13px; white-space: pre-wrap;">${comments}</p>
        </div>
        
        <div style="margin-top: 30px; font-size: 10px; color: #94A3B8; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 12px; font-family: monospace;">
          This dispatch was generated automatically from the Globexxa B2B Portal.
        </div>
      </div>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "info@globexxa.com";

    const mailTransporter = smtpHost && smtpUser && smtpPass
      ? nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })
      : null;

    if (mailTransporter) {
      console.log(`[Vercel Function] Attempting email transmission to info@globexxa.com via SMTP...`);
      await mailTransporter.sendMail({
        from: smtpFrom,
        to: "info@globexxa.com",
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      });
      console.log(`[Vercel Function] Email sent successfully for Inquiry Ref: ${referenceNo}`);
    } else {
      console.log(`
------------------------------------------------------------
[Vercel Function SIMULATED EMAIL DISPATCH TO info@globexxa.com]
Subject: ${emailSubject}
${textBody}
------------------------------------------------------------
Note: Configure SMTP host and authentication credentials in Vercel environment variables to trigger actual mail dispatches.
`);
    }

    return res.status(200).json({
      success: true,
      referenceNo,
      message: "Our B2B Global Trade desk has received your request and will contact you within 24 hours.",
    });
  } catch (error: any) {
    console.error("Error processing inquiry submission in Vercel Function:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process B2B Sourcing Inquiry on the server. Please complete your inquiry directly via WhatsApp.",
    });
  }
}
