import { setCpu } from "@/redux/buildpc/buildpcSlicer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const PcAddCard = ({allComponents}) => {
  
   const {_id,img, ProductName, Category, Price, Status, Reviews} = allComponents;
   
   const router = useRouter()

   const {count} = useSelector(state=>state.counter)
   const dispatch = useDispatch();
 

 
   const handleAddOption = (component)=>{
    dispatch(setCpu(component));
    router.push('/pcbuilder')
   }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" className="h-[300px] w-full" /></figure>
        <div className="card-body">
          <h2 className="card-title">{ ProductName }</h2>
          <p>Category: {Category}</p>
          <p>Price: {Price}</p>
          <p>Status: {Status}</p>
          <p>Rating: {Reviews[0].Rating}</p>
          <div className="card-actions justify-end">
           <button onClick={()=>handleAddOption(allComponents)} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    );
};

export default PcAddCard;