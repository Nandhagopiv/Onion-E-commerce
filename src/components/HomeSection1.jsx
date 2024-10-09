import { Fragment } from "react"
import mainposter from '../Assets/Images/Onion Root Image.jpg'

const HomeSection1 = () => {
    return (
        <Fragment>
            <div className="flex justify-center">
                <img className="w-[85%]" src={mainposter} alt="" />
            </div>
        </Fragment>
    )
}

export default HomeSection1