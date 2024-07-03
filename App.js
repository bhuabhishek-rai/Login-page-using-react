    import "./App.css";
    import Box from "@mui/material/Box";
    import TextField from "@mui/material/TextField";

    import img1 from "./images/pik1.jpg";
    import img2 from "./images/pik2.png";
    import img3 from "./images/pik3.jpg";
    import img4 from "./images/pik4.jpg";


  function App() {
    return (
     <Box component="form" noValidate autoComplete="off">
       <div className="App">
        <div className="container">
          <div className="card_area">
            <h1 className="container_title">Back to your digital life</h1>
            <p className="container_para">Choose one of the option to go</p>
            <div className="input_card">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email with @gmail.com"
                variant="outlined"
              />
              <br></br><br></br> <br></br>
              <TextField
                className="input"
                id="outlined-basic1"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className="line">
              <p className="line_para">Or continue with</p>
            </div>
            <div className="social_card">
              <div className="google">
                <img className="google_img" alt="" src= {img1}  />
              </div>

              <div className="google">
                <img className="google_img" alt="" src= {img2} />
              </div>
              <div className="google">
                <img className="google_img" alt="" src={img3} />
              </div>
              <div className="google">
                <img className="google_img" alt="" src= {img4}  />
              </div>

            </div>
            <br></br>
            <div className="card_button">
              <button class="button-28">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
 
export default App;