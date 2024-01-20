import { Icon } from "@iconify/react";
export function CustomIconone(props){
  const winstate = props.winStatus;
    return(
        <>
          <Icon icon="ion:ticket-sharp" className= {winstate ? "icon-validated-one" : "icon-one" }/>
          <Icon icon="icon-park-solid:check-one" className={winstate ? "icon-validated-two" : "icon-two"} />
        </>
    )
}
