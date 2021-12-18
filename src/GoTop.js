
const [scrollPosition, setSrollPosition] = useState(0);

const [showGoTop, setshowGoTop] = useState("goTopHidden");

//CAMILLAN PROJEKTEJA..
//goTo.js component
const GoTop = (props) => {
    return (
      <>
        <div className={props.showGoTop} onClick={props.scrollUp}>
          <button className="goTop">
            <i className="goTop__text fas fa-chevron-up" />
          </button>
        </div>
      </>
    );
  };
  export default GoTop;


  //Display handler
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };


  //SCROLL LISTENER
useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  
//REF IN JSX (divien sisältö tulee esille, muut esimerkkinä..)
function App() {
    //code
     return (
       <>
         <div ref={refScrollUp}> </div> 
         <Header />
         <AboutUs />
        </>
     );
   }
   
   export default App;

   //SCROLL UP HANDLER

const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };




  <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />

  //PROPS
const GoTop = (props) => {
    return (
      <>
        <div className={props.showGoTop} onClick={props.scrollUp}>
        //BUTTON CODE
      </div>
      </>
    );
  };
  export default GoTop;
