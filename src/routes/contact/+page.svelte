<script lang="ts">
	export let form;
	export let data;
	console.log(data);
</script>

<div class="flex justify-center">
	<main class="min-h-screen md:max-w-md lg:max-w-lg xl:max-w-xl">
		<h1 class="text-3xl font-bold">{data.Title}</h1>
		<section class="my-8 flex flex-col gap-y-2">
			<p>{data.Introduction}</p>
			<div class="flex w-fit flex-col gap-2">
				<a href={`tel:${data.Telephone}`} class="flex items-center bg-black p-2 text-white"
					><iconify-icon class="mx-2" icon="mdi:telephone" />
					<span class="flex-1">{data.Telephone}</span>
					<iconify-icon class="mx-2" icon="mdi:arrow-right" /></a
				>
				<a href={`mailto:${data.Email}`} class="flex items-center bg-black p-2 text-white"
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
				<p class="my-2 border-2 border-black p-2 text-center font-semibold text-green-500">
					Message successfully sent. <br /> You will hear from us soon!
				</p>
			{/if}
			{#if form?.error}
				<p class="my-2 border-2 border-black p-2 text-center font-semibold text-red-500">
					Ups! Something went wrong. <br />Please try again later.
				</p>
			{/if}

			<form method="POST" action="?/send">
				<div class="grid w-full grid-cols-2 gap-2">
					<label for="fullname" class="col-span-2">
						<input
							type="text"
							name="fullname"
							id=""
							placeholder="Full Name"
							class="  w-full border-b-2 border-l-0 border-r-0 border-t-0 border-black text-sm"
							class:border-red-500={form?.fullnameMissing}
							value={form?.fullname ?? ''}
						/>
						{#if form?.fullnameMissing}
							<p class="text-sm text-red-600">Please provide a valid name</p>
						{/if}
					</label>

					<input
						type="tel"
						name="phone"
						id=""
						placeholder="Phone"
						class="  border-b-2 border-l-0 border-r-0 border-t-0 border-black text-sm"
						value={form?.phone ?? ''}
					/>

					<input
						type="text"
						name="company"
						id=""
						placeholder="Company"
						class="  border-b-2 border-l-0 border-r-0 border-t-0 border-black text-sm"
						value={form?.company ?? ''}
					/>

					<label for="" class="col-span-2">
						<input
							type="email"
							name="email"
							id=""
							placeholder="Email"
							class="  w-full border-b-2 border-l-0 border-r-0 border-t-0 border-black text-sm"
							class:border-red-500={form?.emailMissing}
							value={form?.email ?? ''}
						/>
						{#if form?.emailMissing}
							<p class="text-sm text-red-600">Please provide a valid email</p>
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
						class="mt-2 w-full border-b-2 border-l-0 border-r-0 border-t-0 border-black text-sm"
						class:border-red-500={form?.messageMissing}
						value={form?.message ?? ''}
					/>
					{#if form?.messageMissing}
						<p class="text-sm text-red-600">Please provide a valid message</p>
					{/if}
				</label>
				<button
					class="mt-6 flex w-full items-center justify-center bg-black p-2 font-semibold text-white"
					>Send</button
				>
			</form>
		</section>
	</main>
</div>
