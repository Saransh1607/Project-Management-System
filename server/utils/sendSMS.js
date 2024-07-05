import config from "config";
import Twilio from "twilio";

const { SID, TOKEN, NUMBER } = config.get("SEND_SMS");

const client = new Twilio(SID, TOKEN);

export default async function sendSMS(smsData) {
  try {
    await client.messages.create({
      body: smsData.body,
      to: smsData.phonenumber,
      from: NUMBER,
    });
    console.log("SMS sent successfully");
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
}

// Example usage (uncomment to test)
// sendSMS({
//     body: "Hello, this is a test message!",
//     phonenumber: "+1234567890"
// });
