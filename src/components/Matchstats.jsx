export function Matchstatisticsitems(props)
{
    return(
        <>
            <div className="d-flex flex-row justify-content-between fs-7 margin-zero align-items-center" key={props.id}>
              <p className="mx-1">{props.htname}</p>
              <p className="mx-1">{props.scores}</p>
              <p className="mx-1">{props.atname}</p>
            </div>
        </>
    );
}
export function Matchstatshometeam(props)
{
    return(
        <div className="d-flex flex-row justify-content-between fs-7 margin-zero align-items-center" key={props.id}>
              <p className="mx-1">{props.htnametwo}</p>
              <p className="mx-1">{props.scorestwo}</p>
              <p className="mx-1">{props.atnametwo}</p>
            </div>
    )
}
export const Matchstatisticsitemsawayteam = (props) =>
{
    return(
        <>
        <div className="d-flex flex-row justify-content-between fs-7 margin-zero align-items-center" key={props.id}>
              <p className="mx-1">{props.htnametwo}</p>
              <p className="mx-1">{props.scorestwo}</p>
              <p className="mx-1">{props.atnametwo}</p>
            </div>
        </>
    );
}

