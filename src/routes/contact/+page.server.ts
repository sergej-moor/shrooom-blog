import { fail } from '@sveltejs/kit';

export const actions = {
	send: async ({ request }) => {
		const formData = await request.formData();
		//console.log(formData);
		const email = formData.get('email') as string;
		const fullname = formData.get('fullname') as string;
		const phone = formData.get('phone') as string;
		const company = formData.get('company') as string;
		const message = formData.get('message') as string;

		const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		const failObj = {
			email,
			fullname,
			phone,
			company,
			message,
			emailMissing: false,
			fullnameMissing: false,
			messageMissing: false
		};
		failObj.emailMissing = !email || !emailRegex.test(email);
		failObj.fullnameMissing = !fullname;
		failObj.messageMissing = !message;

		if (failObj.emailMissing || failObj.fullnameMissing || failObj.messageMissing)
			return fail(400, failObj);

		const response = await fetch('http://127.0.0.1:1337/api/contacts', {
			method: 'POST',
			body: JSON.stringify({
				data: {
					Message: message,
					Company: company,
					Email: email,
					Phone: phone,
					Name: fullname
				}
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (response.status === 200) return { success: true };
		else return { error: true };

		//
	}
};