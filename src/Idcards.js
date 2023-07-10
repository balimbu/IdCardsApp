import Idcard from "./Idcard";
import completedata from "./Data.json";

const Idcards = () => {
    // console.log(completedata.data);
    return ( 
        <div>
            {
                completedata.data.map( (elem) => {
                    return <Idcard name = {elem.name} state ={elem.des} id ={elem.id} age ={elem.age} />
                })
            }
        {/* <Idcard key ={elem.id} />     if the id is unique data   
        <Idcard/>        
        <Idcard/>    
        <Idcard/>    
        <Idcard/>    
        <Idcard/>    
        <Idcard/>    
        <Idcard/> */}
        </div>

     );
}
 
export default Idcards;