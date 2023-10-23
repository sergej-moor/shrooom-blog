import { fail } from '@sveltejs/kit';
import { STRAPI_URL } from '$env/static/private';

export async function load({ fetch, params }) {
	// `fetch` understands the relative path and saves the response
	// inside the HTML to be reused avoiding additional requests
	const response = await fetch('/api/contact');

	// SvelteKit is going to generate the types
	const data = await response.json();

	return data.data.attributes;
}

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

		const response = await fetch(STRAPI_URL+'/contacts', {
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
