import { Fragment } from "react"

const Category = () => {
    const category = [
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/88/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/9/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/10/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/11/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/12/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/13/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/16/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/74/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/77/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/33/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/66/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/4/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/3/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/2/70/50'
        },
        {
            name: "***Onion Type***",
            img: 'https://picsum.photos/id/1/70/50'
        }
    ]
    return (
        <Fragment>
            <main className="flex p-3 gap-3 scrollbar_for_categories overflow-x-auto">
                {
                    category.map((data) => {
                        return <Fragment>
                            <div className="px-24 bg-[#D5ED9F] py-2 rounded-md flex gap-2 flex-col justify-center items-center shrink-0 shadow_for_categories">
                                <img className="w-[50px] h-[50px]" src={data.img} alt="" />
                                <p className="text-xs text-zinc-800 font-semibold">{data.name}</p>
                            </div>
                        </Fragment>
                    })
                }
            </main>
        </Fragment>
    )
}

export default Category