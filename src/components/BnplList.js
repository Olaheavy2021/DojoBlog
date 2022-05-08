const BnplList = (props) => {
  const bnpls = props.bnpls;
  const title = props.title;

  bnpls.sort(
    function(a,b){
      if(a.name === b.name){
        return a.currency.localeCompare(b.currency)
      }
      return a.name.localeCompare(b.name)
    }
  )

return (  <div className="blog-list">
  <h2>{ title }</h2>
  {bnpls.map(bnpl => (
    <div className="blog-preview" key={bnpl.id} >
        <h2>{ bnpl.name } {bnpl.currency}</h2>
        <img src={bnpl.image} alt="Bnpl provider" width={100} height= {50}/>
      <p>Currency: { bnpl.currency }</p>
    </div>
  ))}
</div> );
}
 
export default BnplList;