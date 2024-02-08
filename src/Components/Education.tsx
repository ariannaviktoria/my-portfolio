
function Education() {
  return (
    <section className="flex justify-center items-center w-full py-32 md:py-40">
    <div className="container px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Education</h2>
        <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Academic qualifications and institutions.
        </p>
      </div>
      <div className="flex justify-center mx-auto max-w-5xl gap-12 md:gap-16 lg:max-w-5xl lg:grid-cols-2">
        <div className="space-y-4 flex items-center">
          <div className="flex items-center space-x-6">
            <img
              alt="School Logo"
              className="w-16 h-16 rounded-full"
              height="50"
              src="/bathory.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50"
            />
            <div>
              <h3 className="text-2xl font-bold">School</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-bold">2016-2020</p>
              <p className="text-sm text-gray-700 dark:text-gray-600">High school graduation</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Báthory István High School, Mathematics-Informatics, Cluj-Napoca</p>
           
            </div>
          </div>
        </div>
        <div className="space-y-4 flex items-center">
          <div className="flex items-center space-x-6">
            <img
              alt="University Logo"
              className="w-16 h-16 rounded-full"
              height="50"
              src="/university.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50"
            />
            <div>
              <h3 className="text-2xl font-bold">University</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-bold">2020-2023</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">Computer Science</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Babeș Bolyai University of Cluj-Napoca </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education