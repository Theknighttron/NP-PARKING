import React from 'react'

const Stats = () => {
  return (
    <div>
        <section class="bg-orange-500 px-9 py-9 max-h-screen flex flex-col items-center justify-center">
            <div class="max-w-screen-xl px-4 py-9 mx-auto text-center lg:py-16 lg:px-6">
                <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-white">260+</dt>
                        <dd class="font-light text-white">Available Parkings</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-white">5+</dt>
                        <dd class="font-light text-white">Cities</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-white">750+</dt>
                        <dd class="font-light text-white">Users</dd>
                    </div>
                </dl>
            </div>
        </section>
    </div>
  )
}

export default Stats