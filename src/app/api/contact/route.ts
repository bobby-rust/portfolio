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

	const msg = await mg.messages
		.create("sandbox139c104952194a1eaffd7f73b412344c.mailgun.org", {
			from: "robrustdev@gmail.com",
			to: ["contact@robrust.dev"],
			subject: subject,
			text: body + "\nName: " + name + "\nEmail: " + email,
		})
		.catch((err) => {
			console.log(err);
			return err;
		});

	if (msg instanceof Error) {
		console.log(msg);
		return new Response(JSON.stringify({ data: msg }), { status: 500 });
	}

	return new Response(JSON.stringify({ data: msg }), { status: 200 });
}
