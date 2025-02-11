import Image from 'next/image';
import projects from '../../api/projects.json';
import Header from "@/components/header";

export default async function Page({params,}:{params: Promise<{id: string}> }) {

  const id = (await params).id;

  const project = projects.find((project) => project.id === id);
  
    if (!project) {
        return <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        </div>;
    }

    return <div>
        <Header></Header>
    <div className="container mx-auto px-[2%]">
    <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
    <p className="mb-4">{project.description}</p>
    <h3 className="text-2xl font-bold mb-2">Client Requirements</h3>
    <p className="mb-4">{project.client_requirements}</p>
    <h3 className="text-2xl font-bold mb-2">Before and After</h3>
    <div className="grid grid-cols-2 gap-4 mb-4">
        <Image 
        src="https://drive.usercontent.google.com/download?id=1n-sAuMQVNs8QByNNyuVUY6LYMhsqit78"
        width={400}
        height={300} 
        alt="Before Photo" 
        className="w-full h-auto rounded shadow"
        />
        <Image 
        src="https://drive.usercontent.google.com/download?id=1n-sAuMQVNs8QByNNyuVUY6LYMhsqit78"
        width={400}
        height={300}  
        alt="After Photo" 
        className="w-full h-auto rounded shadow"
        />
    </div>
    <h3 className="text-2xl font-bold mb-2">3D Renders and Floor Plans</h3>
    <div className="grid grid-cols-2 gap-4">
    <Image 
    src="https://drive.usercontent.google.com/download?id=1n-sAuMQVNs8QByNNyuVUY6LYMhsqit78"
    width={400}
    height={300} 
    alt="3D Render" 
    className="w-full h-auto rounded shadow"
    />
    <Image 
    src="https://drive.usercontent.google.com/download?id=1n-sAuMQVNs8QByNNyuVUY6LYMhsqit78" 
    width={400}
    height={300} 
    alt="Floor Plan" 
    className="w-full h-auto rounded shadow"
    />
    </div>
</div>
</div>
  }