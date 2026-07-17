import data from "./../data/projects.json";
import ProjectTags from "./ProjectTags";
import image0 from "./../assets/projectImages/canvas.png"

export default function ProjectCards() {
    const getImageSrc = (id: number) => {
        switch (id) {
            case 0:
                return image0;
            default:
                return image0;
        }
    }
    return (
        <div className="flex flex-row w-full">
            {
                data.map((entry, index) => {
                    return (
                        <div className="flex flex-col w-[45%] m-[2.5%] p-6 border rounded-lg" key={index}>
                            <div className="text-xl mb-3">{entry.name}</div>
                            <img src={getImageSrc(entry.image)} className="w-full object-contain rounded-lg bg-black h-[30vh]"/>
                            {ProjectTags(entry.tags)}
                            <div className="text-md">{entry.desc}</div>
                            <div className="flex flex-row w-full justify-evenly mt-2">
                                { entry.urlSite ? (<a href={entry.urlSite}><button className="text-md rounded-md cursor-pointer border p-2">VISIT</button></a>) : (<></>)}
                                { entry.urlCode ? (<a href={entry.urlCode}><button className="text-md rounded-md cursor-pointer border p-2">{ entry.urlServer ? (<>CODE (CLIENT)</>) : (<>CODE</>) }</button></a>) : (<></>)}
                                { entry.urlServer ? (<a href={entry.urlServer}><button className="text-md rounded-md cursor-pointer border p-2">CODE (SERVER)</button></a>) : (<></>)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}