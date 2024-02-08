import { Card } from "@nextui-org/react";

function Projects() {
    return (

        <section className="w-full py-12 md:py-24 lg:py-32 flex items-start justify-center">
            <div className="container grid items-start gap-10 px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                        <p className="text-gray-500 dark:text-gray-400">Here are some of the projects I've been working on.</p>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Card isHoverable>
                                <div className="grid gap-4 p-4">
                                    <img
                                        alt="Image"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
                                        height="150"
                                        src="/adventure.jpeg"
                                        width="300"
                                    />
                                    <div className="flex flex-col gap-1 h-72 overflow-y-auto  [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-500
                        dark:[&::-webkit-scrollbar-track]:bg-slate-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
                                        <h3 className="text-xl font-bold">Let's go for a little adventure</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">

                                            I developed an adventure-style 2D game in Java, using pixel art for the background and characters. Through this project, I learned about game design, pixel art creation, and sound integration. I embarked on this endeavor to enhance my skills in game development and explore creative expression through pixel art while providing an engaging gameplay experience for users.





                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card isHoverable>
                                <div className="grid gap-4 p-4">
                                    <img
                                        alt="Image"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                        height="150"
                                        src="/trains.jpeg"
                                        width="300"
                                    />
                                    <div className="flex flex-col gap-1 h-72  overflow-y-auto  [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-500
                        dark:[&::-webkit-scrollbar-track]:bg-slate-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
                                        <h3 className="text-xl font-bold">RailMaster: A Multi-Role Train Booking Application</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            I developed a train schedule application using JavaScript with a Node.js backend and HTML/CSS frontend, enabling users to book train journeys, including routes with multiple transfers. Throughout the project, I gained insights into full-stack web development, including backend-server interactions, frontend design, and user authentication. I undertook this project to refine my skills in building complex web applications and to create a practical tool for managing train bookings with a modular architecture catering to different user roles: visitor, user, and admin.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Card isHoverable>
                                <div className="grid gap-4 p-4">
                                    <img
                                        alt="Image"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                        height="150"
                                        src="/springmart.jpeg"
                                        width="300"
                                    />
                                    <div className="flex flex-col gap-1 h-72  overflow-y-auto  [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-500
                        dark:[&::-webkit-scrollbar-track]:bg-slate-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
                                        <h3 className="text-xl font-bold">SpringMart</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            I created a Spring application facilitating the advertising, selling, and purchasing of hardware components, employing a robust three-layer architecture comprising the business, data access, and presentation layers. Through this project, I gained proficiency in Spring framework development, database management, and MVC design principles, enabling seamless interaction between backend logic, data storage, and user interface. The motivation behind this endeavor was to enhance my understanding of enterprise-level application development and to provide a scalable platform for trading hardware components with a structured architectural approach.





                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card isHoverable>
                                <div className="grid gap-4 p-4">
                                    <img
                                        alt="Image"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                        height="150"
                                        src="/LineUs.jpeg"
                                        width="300"
                                    />
                                    <div className="flex flex-col gap-1 h-72  overflow-y-auto  [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-500
                        dark:[&::-webkit-scrollbar-track]:bg-slate-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-slate-800">
                                        <h3 className="text-xl font-bold">LineUs</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            As part of a team effort, we developed LineUs, a project featuring a robot arm capable of physically drawing on paper. Our collaborative effort involved using a Python backend with AI tools and implementing the Kiwi framework for frontend design. Throughout this project, we collectively gained expertise in teamwork, project management, backend development, and frontend design. Our motivation stemmed from the desire to explore the integration of robotics, artificial intelligence, and user interface design, aiming to create an innovative platform for artistic expression through collaborative technology.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects