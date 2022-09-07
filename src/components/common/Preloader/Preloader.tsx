import s from "./Preloader.module.css"
import preloader from '../../../assets/images/preloader.gif'

export default function Preloader(){
    return(
        <div className={s.preloader}>
            <img src={preloader}></img>
        </div>
    )
}