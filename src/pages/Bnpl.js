import useFetch from "../hooks/useFetch";
import BnplList from "../components/BnplList"
const Bnpl = () => {
  const {data : bnpls, isPending, error} = useFetch('http://localhost:8000/bnpls');
  return ( <div className="home">
   <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {bnpls && <BnplList bnpls={bnpls} title="All Blogs" />}
   
    </div>
  </div> );
}
 
export default Bnpl;