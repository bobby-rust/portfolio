import FormData from "form-data";
import Mailgun, { Interfaces } from "mailgun.js";
const mailgun = new Mailgun(FormData);

console.log(process.env.MAILGUN_API_KEY);
const mg: Interfaces.IMailgunClient = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY ?? "",
});

export async function POST(request: Request) {
    const { name, email, subject, body } = await request.json();

    mg.messages
        .create("sandbox139c104952194a1eaffd7f73b412344c.mailgun.org", {
            from: "robrustdev@gmail.com",
            to: ["bobby.rust121@gmail.com"],
            subject: subject,
            text: body + "\nName: " + name + "\nEmail: " + email,
        })
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));

    return new Response(JSON.stringify({ message: "Message sent" }), {
        status: 200,
    });
}
