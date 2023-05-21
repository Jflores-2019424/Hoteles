import { HabitacionesCard } from  '../components/HabitacionesCard'

export const HabitacionesList = () =>{
    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
        <li>
            <HabitacionesCard/>
        </li>
        </div>
    )
}