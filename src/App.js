
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="frame">
          <span class="black">Ship</span>
          <span class="blue" >mate.</span>
        </div>        

        <div class="dollar"><p class="purple">$</p></div>
        <div class="track"><p class="white">Track shipment</p></div>
      </header>
      <main class="main">
        <div class="upper">Hassle-Free Shipping Solutions</div>
        <div class="lower">Compare, book, and manage your freight across the world's top logistics providers, all on one platform</div>
      </main>
      <content class="search_bar">
         <div class="group">
                <div class="sea">
                  <img class="origin_intial" src="./destination.png" alt="int"></img>
                  <input class="grey_intial" placeholder="Origin,port,city"></input>
                </div>
                <div class="sea">
                <img class="origin_final" src="./destination.png" alt="int"></img>
                  <input class="grey_final" placeholder="Destination,port,city"></input>
                </div>
                <div class="sea">
                <img class="origin_cal" src="./calendar.png" alt="cal"></img>
                <input class="grey_cal" placeholder="23 April 2023"></input>
                </div>
                <div class="sea">
                <img class="origin_ship" src="./ship_live.png" alt="ship"></img>
                  <input class="grey_ship" placeholder="Load"></input>
                </div>
                <div class="go">
                  <img class="origin_go" src="./go.png" alt="go" ></img>
                  </div>
         </div>
      </content>
      <services class="services">
        <div class="title">Services</div>
         <div class="freight_services">
           <img class="img_title_1" src="./ship_blue.png" alt="me"></img>
           <div class="sub_title_1">Freight Services</div>
           <div class="h_line"></div>
           <div class="det">Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</div>
         </div>
         <div class="Business_services">
         <img class="img_title_2" src="./bag.png" alt="me"></img>
         <div class="sub_title_2">Business Services</div>
         <div class="h_line"></div>
         <div class="det">We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</div>
         </div>
         <div class="Shipping_services">
         <img class="img_title_3" src="./web.png" alt="me"></img>
         <div class="sub_title_3">Shipping & Logistics</div>
         <div class="h_line"></div>
         <div class="det">Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</div>
         </div>
         <div class="Support">
         <img class="img_title_4" src="./hour.png" alt="me"></img>
         <div class="sub_title_4">24/7 Support</div>
         <div class="h_line"></div>
         <div class="det">Receive support from our experts all over the world at every stage of the process, 24/7.</div>
         </div>
      </services>
      {/* <footer class="footer">
          <img class="down" src="./footer.png" alt="my"></img>
      </footer> */}
    </div>
  );
}

export default App;
