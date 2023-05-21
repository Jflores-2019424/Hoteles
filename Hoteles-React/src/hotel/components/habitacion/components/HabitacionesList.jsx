import { HabitacionesCard } from  '../components/HabitacionesCard'

export const HabitacionesList = () =>{
    return(
        <div className="row rows-cols-2 row-cols-md-3 g-3">
        <li>
            <HabitacionesCard/>
        </li>
        </div>
    )
}