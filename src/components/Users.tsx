import { cn } from "@/lib/utils"
import users from "../../public/users/users"
const Users = ({ className }: { className: string }) => {

    return (
        <div className={cn('', className)}>
            {
                users.map((link, index) => {
                    return (
                        <div key={index}>
                            <img width={50} className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src={link} alt="" key={index} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Users