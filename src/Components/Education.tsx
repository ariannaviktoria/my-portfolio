function Education() {
  return (
    <>
      <section className="w-full py-4 md:py-32 lg:py-40 flex justify-center items-center ">
        <div className="container px-2 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter sm:text-5xl">Education</h2>
            <p className="mx-auto max-w-3xl text-gray-500 text-sm md:text-xl/relaxed dark:text-gray-400">
              Academic qualifications and institutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center mx-auto max-w-5xl gap-4 md:gap-12 lg:gap-16 lg:max-w-5xl lg:grid-cols-2">
            <div className="space-y-4 flex items-center">
              <div className="flex items-center space-x-2 md:space-x-6">
                <img
                  alt="School Logo"
                  className="w-8 h-8 md:w-16 md:h-16 rounded-full"
                  height="50"
                  src="/bathory.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">School</h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 font-bold">2016-2020</p>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-600">High school graduation</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Báthory István High School, Mathematics-Informatics, Cluj-Napoca</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 flex items-center">
              <div className="flex items-center space-x-2 md:space-x-6">
                <img
                  alt="University Logo"
                  className="w-8 h-8 md:w-16 md:h-16 rounded-full"
                  height="50"
                  src="/university.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">University</h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 font-bold">2020-2023</p>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400">Computer Science</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Babeș Bolyai University of Cluj-Napoca </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-4 md:py-32 lg:py-12 flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Professional work experience and roles.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center mx-auto max-w-5xl gap-4 md:gap-12 lg:gap-16 lg:max-w-5xl lg:grid-cols-2" >
            <div className="space-y-4 flex items-center justify-center">
            <div className="flex items-center space-x-6">
              <img
                alt="internship logo"
                className="w-8 h-8 md:w-16 md:h-16 rounded-full"
                height="50"
                src="data:image/png;base64,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"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Internship</h3>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 font-bold">2022-2022</p>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400">Full Stack Software Developer</p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">NTT DATA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education