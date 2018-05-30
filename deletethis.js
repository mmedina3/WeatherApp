const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

class App extends React.Component {
  state= {
    city: undefined,
    error: undefined
  }

  getCity = async (e) => {
    e.preventDefault();
      try {
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&key=${API_KEY}`);
        const data = await api_call.json();
    
    if(city) {
      console.log(data);
      this.setState({
        city: data.name,
        error: ""
    });
      } else {
        this.setState({
        city: undefined,
        error: "Please enter the values!"
       });
      }
    } 
       catch(e) {
      console.log('Error!', e);
  }   
}
render(){
  return(
    <div>
         <h1>Input Information</h1>
         <Form />
            
         <h1> Search City</h1>
         <Search onSubmit={this.getInfo}  
          city={this.state.city} />
   
        <h1>Image Upload</h1>
        <Main />

    </div>
  );
 }
};





const App = () => (
    <div>
      <h1>Input Information</h1>
      <Form />
  
      <h1> Search City</h1>
      <Search />
   
      <h1>Image Upload</h1>
      <Main />
    </div>
  );



  https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=${city}