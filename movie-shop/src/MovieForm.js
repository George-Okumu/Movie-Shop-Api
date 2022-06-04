import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import Rightside from "./RightSide";

function MovieForm() {
    const [movieData, setMovieData] = useState({
        title: "",
        year: "",
        length: "",
        description: "",
        poster_url: "",
        category: "",
        director: "",
        female_director: false,
        discount: false
    })

    const [errors, setErrors] = useState([]);

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setMovieData({
            ...movieData, [e.target.id]: value,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();

        fetch("/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((newMovie) => console.log(newMovie));
                } else {
                    response.json().then((errorData) => setErrors(errorData.errors));
                }
            })

    }
    return (
        <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
            <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
                <LeftSideBar />
            </aside>

            <main class="flex-1 py-10  px-5 sm:px-10">
                <div class="max-w-2xl mx-auto bg-white p-10">

                    <form onSubmit={handleSubmit}>
                        <div classname="grid gap-6 mb-6 lg:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                <input type="text" id="title" value={movieData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Movie Title"/>
                            </div>
                            <div>
                                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Year of Release</label>
                                <input type="number" id="year" value={movieData.year} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Year of release"/>
                            </div>
                            <div>
                                <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Length</label>
                                <input type="number" id="length" value={movieData.length} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Length"/>
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input type="text" id="description" value={movieData.description} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"/>
                            </div>
                            <div>
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poster URL</label>
                                <input type="url" id="poster_url" value={movieData.poster_url} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Poster url"/>
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                                <input type="text" id="category" value={movieData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category"/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="director" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Director</label>
                            <input type="name" id="director" value={movieData.director} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Director"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="female-director" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female director?
                                <input type="checkbox" id="female-director" onChange={handleChange} checked={movieData.female_director} />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="discount" className="block mb-0 text-sm font-medium text-gray-900 dark:text-gray-300">Discount?
                                <input type="checkbox" onChange={handleChange} id="discount" checked={movieData.discount} />
                            </label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </main>

            {/* Right side bar */}
            <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
                <Rightside />
            </aside>

        </div>
    )
}
export default MovieForm;