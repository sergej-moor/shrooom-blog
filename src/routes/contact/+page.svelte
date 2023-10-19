<script lang="ts">
	export let form;
	export let data;
	console.log(data);
</script>

<div class="flex justify-center">
	<main class="min-h-screen md:max-w-md lg:max-w-lg xl:max-w-xl">
		<h1 class="font-bold text-3xl">{data.Title}</h1>
		<section class="my-8 flex flex-col gap-y-2">
			<p>{data.Introduction}</p>
			<div class="flex flex-col w-fit gap-2">
				<a href={`tel:${data.Telephone}`} class="text-white bg-black p-2 flex items-center"
					><iconify-icon class="mx-2" icon="mdi:telephone" />
					<span class="flex-1">{data.Telephone}</span>
					<iconify-icon class="mx-2" icon="mdi:arrow-right" /></a
				>
				<a href={`mailto:${data.Email}`} class="text-white bg-black p-2 flex items-center"
					><iconify-icon class="mx-2" icon="mdi:email" />
					<span class="flex-1">{data.Email}</span>
					<iconify-icon class="mx-2" icon="mdi:arrow-right" /></a
				>
			</div>
		</section>
		<section class="my-8">
			<p class="my-4">
				{data.FormText}
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
