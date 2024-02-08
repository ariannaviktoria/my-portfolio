function Skills() {

    return (

        <section className="py-12 lg:py-24 flex items-center justify-center gap-4 ">
            <div className="container px-4 grid max-w-6xl items-center justify-center gap-4 text-center md:px-6 md:gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4 lg:space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Experience</h1>
                        <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Here's a summary of my skills and experience.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 lg:gap-8">
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-400">
                            Technical Skills
                        </h3>
                        <div className="space-y-4 h-96 overflow-y-auto   [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-500
                        dark:[&::-webkit-scrollbar-track]:bg-slate-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
                
                            {[
                                { name: "Assembly", level: "Basic", logo: "https://hackr.io/tutorials/learn-assembly-language/logo/logo-assembly-language?ver=1545022468" },
                                { name: "C", level: "Intermediate", logo: "https://tse3.mm.bing.net/th?id=OIP.bkbn2-K7c9rMBV5dvYXDrQHaIh&pid=Api&P=0&h=220" },
                                { name: "C++", level: "Intermediate", logo: "https://anthoncode.com/wp-content/uploads/2019/01/c-logo-png.png?is-pending-load=1" },
                                { name: "Linux bash", level: "Intermediate", logo: "http://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png" },
                                { name: "Java", level: "Intermediate", logo: "https://www.kindpng.com/picc/m/198-1984828_java-icon-transparent-hd-png-download.png" },
                                { name: "Spring", level: "Intermediate", logo: "https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png" },
                                { name: "HTML", level: "Intermediate", logo: "https://www.logolynx.com/images/logolynx/f5/f5c1947c388ec543368c491ad77ea528.jpeg" },
                                { name: "CSS", level: "Intermediate", logo: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" },
                                { name: "Javascript", level: "Intermediate", logo: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-2048x1280.png" },
                                { name: "Python", level: "Intermediate", logo: "https://pluspng.com/img-png/python-logo-png-open-2000.png" },
                                { name: "Matlab", level: "Intermediate", logo: "https://i.pinimg.com/originals/49/5e/b2/495eb202028e863116b523e83ba0f61a.png" },
                                { name: "Prolog", level: "Basic", logo: "https://dashboard.snapcraft.io/site_media/appmedia/2020/04/Prolog-logo-512.png" },
                                { name: "Haskell", level: "Basic", logo: "https://i1.wp.com/www.linuxlinks.com/wp-content/uploads/2019/06/Haskell-Logo.png?fit=328%2C269&ssl=1" },
                                { name: "SQL", level: "Intermediate", logo: "https://i0.wp.com/whyazure.in/wp-content/uploads/2018/08/Azure-SQL-Database.png?fit=512%2C512&ssl=1" },
                                { name: "C#", level: "Basic", logo: "https://static-00.iconduck.com/assets.00/csharp-icon-1755x2048-5r3ugs1f.png" },
                                { name: "React", level: "Basic", logo: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" },
                                { name: "TailWind", level: "Basic", logo: "https://tse4.mm.bing.net/th?id=OIP.XCm94ZiyrutjsQaikqwPnAHaEy&pid=Api&P=0&h=220" },
                            ].map((skill) => (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8">
                                            <img
                                                alt={skill.name}
                                                className="rounded-full object-cover"
                                                height="32"
                                                src={skill.logo}
                                                style={{
                                                    aspectRatio: "32/32",
                                                    objectFit: "cover",
                                                }}
                                                width="32"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-800 dark:text-gray-400">
                            Soft Skills
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">Teamwork</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Excellent collaboration and team building
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">Communication</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Clear and effective communication skills
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">Problem Solving</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Analytical thinking and creative problem solving
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-800 dark:text-gray-400">
                            Language Skills
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8">
                                        <img
                                            alt="Hungarian"
                                            className="rounded-full object-cover"
                                            height="32"
                                            src="https://flagpedia.net/data/flags/w1600/hu.png"
                                            style={{
                                                aspectRatio: "32/32",
                                                objectFit: "cover",
                                            }}
                                            width="32"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Hungarian</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Mother tongue</span>
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8">
                                        <img
                                            alt="Romanian"
                                            className="rounded-full object-cover"
                                            height="32"
                                            src="https://wallpapercave.com/wp/wp6783269.jpg"
                                            style={{
                                                aspectRatio: "32/32",
                                                objectFit: "cover",
                                            }}
                                            width="32"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Romanian</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Advanced</span>
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8">
                                        <img
                                            alt="English"
                                            className="rounded-full object-cover"
                                            height="32"
                                            src="http://donnahatch.com/wp-content/uploads/2015/04/Flag_of_the_United_Kingdom.svg_.png"
                                            style={{
                                                aspectRatio: "32/32",
                                                objectFit: "cover",
                                            }}
                                            width="32"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">English</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Advanced</span>
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills