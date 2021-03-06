import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import Rightside from "./RightSide";
import ReactPlayer from "react-player/lazy";


function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className="font-montserrat text-sm bg-white dark:bg-zinc-900">
            <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
                {/* Left Sidebar */}
                <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
                    <LeftSideBar />
                </aside>                {/* End Sidebar */}
                {/* Main Page */}

                <main class="flex-1 py-10  px-5 sm:px-10">
                    <header class=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12 ">
                        <span class="mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </span>
                        <svg className="h-8 w-8 fill-red-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
                        </svg>
                        <div className="tracking-wide dark:text-white flex-1">Movie Shop<span class="text-red-600">.</span></div>

                        <div className="relative items-center content-center flex ml-2">
                            <span className="text-gray-400 absolute left-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="text" className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1" placeholder="Search ..." />
                        </div>
                    </header>

                    <section>
                        <nav className="flex space-x-6 text-gray-400 font-medium">
                            <a href="#" className="hover:text-gray-700 dark:hover:text-white">TV Series</a>
                            <a href="#" className="text-gray-700 dark:text-white font-semibold">Movies</a>
                            <a href="#" className="hover:text-gray-700 dark:hover:text-white ">Animes</a>
                        </nav>

                        <div className="flex mine flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white">
                            <ReactPlayer className="react-player" playing muted controls url={[
                                'https://www.youtube.com/embed/pyM3z73oMAk',
                                'https://youtu.be/SsK9Y9_WnDk',
                                'https://youtu.be/svnAD0TApb8'
                            ]}
                                width='100%'
                                height='100%' />
                            {/* <div className="flex -space-x-1 items-center">
                                <img className="rounded-full w-7 h-7 shadow-lg border border-white"
                                    src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8csk" alt="" srcset="" />
                                <img className="rounded-full w-7 h-7 shadow-lg border border-white"
                                    src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8cck"
                                    alt="" srcset="" />
                                <img className="rounded-full w-7 h-7 shadow-lg border border-white"
                                    src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsfj8cck"
                                    alt="" srcset="" />
                                <span className="pl-4 text-xs drop-shadow-lg">+8 friends are watching</span>
                            </div> */}

                            {/* <div class="bg-gradient-to-r from-blue-700 to-blue-600 -mx-7 -mb-6 px-7 pb-6 pt-2">
                                <span class="uppercase text-3xl font-semibold drop-shadow-lg">365 Days</span>
                                <div class="text-xs text-gray-200 mt-2">
                                    <a href="#twelve" className="">Action</a>,
                                    <a href="#eleven" className="">Adventure</a>,
                                    <a href="#ten" className="">Sci-Fi</a>
                                </div>
                                <div className="mt-4 flex space-x-3 items-center">
                                    <a href="#mine" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs inline-block">Watch</a>
                                    <a href="#thrteen" className="p-2.5 bg-blue-600 rounded-lg hover:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </section>


                    {/* For Top Movies */}
                    <section class="mt-9">
                        <div class="flex items-center justify-between">
                            <span class="font-semibold text-gray-700 text-base dark:text-white">Top Movies</span>
                            <div class="flex items-center space-x-2 fill-gray-500">
                                <svg class="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                                </svg>
                                <svg class="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
                            {movies.map((movie) => (
                                <div key={movie.id} className="relative hover:-skew-y-6 rounded-xl overflow-hidden">
                                    <img src={movie.poster_url} className="object-cover h-full w-full -z-10" alt={movie.title} />
                                    <div className="absolute top-0 h-full w-full bg-gradient-to-t from-blue-700 p-3 flex flex-col justify-between">
                                        <h2 className="p-2.5 bg-gray-800/80 rounded-lg text-white hover:bg-blue-600/80">{movie.title}</h2>

                                        <div className="self-center flex flex-col items-center space-y-2">
                                            <span className="capitalize text-white font-medium drop-shadow-md">Directed By:</span>
                                            <span className="text-gray-300 text-xs">{movie.director}</span>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Right side bar */}
                <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
                    <Rightside />
                </aside>

            </div>

        </div>
    )
}

export default Movies;