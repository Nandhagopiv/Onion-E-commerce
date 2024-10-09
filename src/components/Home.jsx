import { Fragment } from "react"
import Category from "./Category"
import HomeSection1 from "./HomeSection1"

const Home = () => {
    return (
        <Fragment>
            <main className="flex my-3 justify-center">
                <div className="w-[80%] flex flex-col gap-3">
                    <Category/>
                    <HomeSection1/>
                </div>
            </main>
        </Fragment>
    )
}

export default Home