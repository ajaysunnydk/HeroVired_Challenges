import Card from "./Card";

function Technology(props){
    return(
        <div className="technology">
            <h2>{props.techTitle}</h2>
            <Card></Card>            
        </div>
    )
}
export default Technology;