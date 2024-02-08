
function Hobbies() {
  return (
 <div className="w-full py-12 lg:py-24 xl:py-32 flex items-center justify-center">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hobbies & Interests</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            A collection of my hobbies and interests. I enjoy spending time doing these activities in my free time.
          </p>
        </div>
      </div>
      <div className="container grid max-w-5xl items-center gap-8 px-4 py-8 md:grid-cols-2 md:py-12 lg:gap-10 lg:px-6 xl:max-w-6xl xl:gap-16">
        <div className="space-y-4 md:space-y-6 lg:order-2 lg:row-start-1">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Singing 🎤</h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Expressing myself through music and enjoying the art of singing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4" />
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">{`Cooking 👩\u{200d}🍳`}</h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I enjoy experimenting with new recipes and creating delicious dishes in the kitchen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4" />
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Driving 🚗</h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Exploring new roads and enjoying the thrill of driving.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4" />
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Coding 💻</h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I love diving into code and building amazing projects.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4" />
        </div>
      </div>
    </div>
  )
}

export default Hobbies