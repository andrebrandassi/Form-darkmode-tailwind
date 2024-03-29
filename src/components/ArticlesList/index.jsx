import datas from "../../../articles.json"
import Article from "../Article"

const ArticlesList = () => {
    return(
        <div className="max-w-2xl mx-auto mt-5 sm:mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
            {datas.map(data => <Article {...data} />)}
        </div>
    )
}

export default ArticlesList