import './style.css';
const MyComponent = () =>{
  const test = 36
  return (
    <>
       <div> {test} MyComponent1</div>
       <div className='Child'>Child</div>
       <div>{console.log('test')}</div>
    </>
   
  );
  
}
export default MyComponent; 