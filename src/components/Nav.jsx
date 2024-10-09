import { Fragment } from "react"

const Nav = () => {
    return (
        <Fragment>
            <main className="flex border-b-2 gap-5 flex-col p-5">
                <div>
                    <h1 className="text-5xl text-center text-[#185519] font-bold">Company Name</h1>
                </div>
                <div className="flex font-semibold text-[#E8B86D] cursor-pointer gap-3 justify-center">
                    <p className="hover:text-[#185519] hover:underline">Home</p>
                    <p className="hover:text-[#185519] hover:underline">Contacts</p>
                    <p className="hover:text-[#185519] hover:underline">Products</p>
                </div>
            </main>
        </Fragment>
    )
}

export default Nav