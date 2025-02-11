import Header from "@/components/header"

export default function Page () {
    return (
        <div>x
        <Header></Header>
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded" placeholder="Your Name"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded" placeholder="Your Email"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="project-type">Project Type</label>
                <select id="project-type" className="w-full px-4 py-2 border rounded">
                    <option>Residential</option>
                    <option>Commercial</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="budget">Budget</label>
                <input type="text" id="budget" className="w-full px-4 py-2 border rounded" placeholder="Estimated Budget"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">Send Message</button>
        </form>
    </div>
    </div>
    )
}