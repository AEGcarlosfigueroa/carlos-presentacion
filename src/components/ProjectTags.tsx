export default function ProjectTags(tags: Array<string>) {
    return (
        <div className="flex flex-row w-full justify-center mt-2 mb-2">
            {tags.map((tag, key) => {
                return (
                    <div className="text-md border rounded-md bg-black p-1 mr-2 ml-2" key={key}>{tag}</div>
                )
            })}
        </div>
    )
}