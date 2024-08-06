import sun from './sun.svg' ; 
export default function Box({data}){
    let t = data.time.split(' ') ; 
    t = t[1] ;
    return(
        <div className="col-1 pt-3 p-2 bg-blue m-2 text-center">
            <p>{t}</p>
            <img src={data.condition.icon} alt="sun image" />
            <p>{data.temp_c} ° C</p>
        </div>
    )
}