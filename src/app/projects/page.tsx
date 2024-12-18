import Header from "@/components/header";
import { promises as fs} from 'fs';

export default async function Portofolio() {
    const path = process.cwd() + "/app/projects.json";
    const file = await fs.readFile(path, "utf8");
    const projects = JSON.parse(file);



    return (
      <div>
        <main>
          <Header></Header>
          <section role="search" className="py-12 bg-white">
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Project Showcase</h1>
             <div className="text-center mb-8">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full mr-4">All</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full mr-4">Residential</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full mr-4">Commercial</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    projects.map((project) => {
                        return (
                <a className="block" href="#project1">{project.id}
                <img id="imgProject1" src="./" alt="3M Project" className="w-full h-auto rounded shadow"/>
            </a>
                    )})
                }
                <a className="block" href="#project1">
                    <img id="imgProject1" src="./" alt="3M Project" className="w-full h-auto rounded shadow"/>
                </a>
                <a className="block" href="#project2">
                    <img id="imgProject2" src="./" alt="Kids Park Project" className="w-full h-auto rounded shadow"/>
                </a>
                <a className="block" href="#project3">
                    <img id="imgProject3" src="./" alt="Industrial Project" className="w-full h-auto rounded shadow"/>
                </a>
                <a className="block" href="#">
                    <img id="imgProject4" alt="Commercial Project 2" className="w-full h-auto rounded shadow"/>
                </a>
                <a className="block" href="#">
                    <img id="imgProject5" alt="Residential Project 3" className="w-full h-auto rounded shadow"/>
                </a>
                <a className="block" href="#">
                    <img id="imgProject6" alt="Commercial Project 3" className="w-full h-auto rounded shadow"/>
                </a>
            </div>
        </div>
    </section>
        </main>
      </div>
    );
  }