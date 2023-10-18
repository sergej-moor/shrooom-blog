<script lang="ts">
	export let form;
	console.log(form);
</script>

<div class="flex justify-center">
	<main class="min-h-screen md:max-w-md lg:max-w-lg xl:max-w-xl">
		<h1 class="font-bold text-3xl">Contact</h1>
		<section class="my-8 flex flex-col gap-y-2">
			<p>We appreciate direct contact and look forward to your call or message.</p>
			<div class="flex flex-col w-fit gap-2">
				<a href="tel:+123456789" class="text-white bg-black p-2 flex items-center"
					><iconify-icon class="mx-2" icon="mdi:telephone" />
					<span class="flex-1">+49 123 456 789 5</span>
					<iconify-icon class="mx-2" icon="mdi:arrow-right" /></a
				>
				<a href="mailto:hello@shrooom.com" class="text-white bg-black p-2 flex items-center"
					><iconify-icon class="mx-2" icon="mdi:email" />
					<span class="flex-1">hello@shrooom.com</span>
					<iconify-icon class="mx-2" icon="mdi:arrow-right" /></a
				>
			</div>
		</section>
		<section class="my-8">
			<p class="my-4">
				If you have any questions or want to learn more about us, you can send us a message directly
				here. Our team will get back to you as soon as possible.
			</p>
			{#if form?.success}
				<!-- content here -->
				<p class="text-green-500 font-semibold p-2 border-black border-2 text-center my-2">
					Message successfully sent. <br /> You will hear from us soon!
				</p>
			{/if}
			{#if form?.error}
				<p class="text-red-500 font-semibold p-2 border-black border-2 text-center my-2">
					Ups! Something went wrong. <br />Please try again later.
				</p>
			{/if}

			<form method="POST" action="?/send">
				<div class="grid grid-cols-2 gap-2 w-full">
					<label for="fullname" class="col-span-2">
						<input
							type="text"
							name="fullname"
							id=""
							placeholder="Full Name"
							class="  border-b-2 border-black border-r-0 border-l-0 border-t-0 text-sm w-full"
							class:border-red-500={form?.fullnameMissing}
							value={form?.fullname ?? ''}
						/>
						{#if form?.fullnameMissing}
							<p class="text-red-600 text-sm">Please provide a valid name</p>
						{/if}
					</label>

					<input
						type="tel"
						name="phone"
						id=""
						placeholder="Phone"
						class="  border-b-2 border-black border-r-0 border-l-0 border-t-0 text-sm"
						value={form?.phone ?? ''}
					/>

					<input
						type="text"
						name="company"
						id=""
						placeholder="Company"
						class="  border-b-2 border-black border-r-0 border-l-0 border-t-0 text-sm"
						value={form?.company ?? ''}
					/>

					<label for="" class="col-span-2">
						<input
							type="email"
							name="email"
							id=""
							placeholder="Email"
							class="  border-b-2 border-black border-r-0 border-l-0 border-t-0 text-sm w-full"
							class:border-red-500={form?.emailMissing}
							value={form?.email ?? ''}
						/>
						{#if form?.emailMissing}
							<p class="text-red-600 text-sm">Please provide a valid email</p>
						{/if}
					</label>
				</div>
				<label for="message">
					<textarea
						name="message"
						id=""
						cols="30"
						rows="10"
						placeholder="Your message"
						class="w-full mt-2 border-b-2 border-black border-r-0 border-l-0 border-t-0 text-sm"
						class:border-red-500={form?.messageMissing}
						value={form?.message ?? ''}
					/>
					{#if form?.messageMissing}
						<p class="text-red-600 text-sm">Please provide a valid message</p>
					{/if}
				</label>
				<button
					class="text-white bg-black p-2 flex items-center justify-center w-full font-semibold mt-6"
					>Send</button
				>
			</form>
		</section>
	</main>
</div>
