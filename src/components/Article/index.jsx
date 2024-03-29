const Article = ({title,text,image,alt,tags}) => {
    return(
        <div className="article-style" >
            <h3 className=" text-alura-200 dark:text-gray-200 text-xl font-bold ">{title}</h3>
            <div className="w-full flex justify-end gap-2 pr-2 ">
                {tags.map(tag => <span key={tag} className="font-bold bg-alura-100 hover:bg-dark-200 hover:dark:bg-gray-600 dark:bg-dark-100 text-gray-200 px-4 py-1 rounded-full uppercase hover:scale-110">{tag}</span>)}
            </div>
            <div className=" grid gap-3 ">
                {text.map((content, index) => <p className="text-alura-200 dark:text-gray-400" key={index}>{content}</p> )}
            </div>
            {image && <img src={image} />}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>
    )
}

export default Article