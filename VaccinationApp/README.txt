****   backEnd   ***
1. npm init
2. set start in package.json already, then just run : start
3. port: 9001

***  fondEnd ****
1. port: 9091
2.  install dependencies
3 .babelrc,.gitignore, webpack.config.js, dist folder, html.index, html.js, App.js, App.css
2. set up in package.json already
-> then just run 1. npm run build
                 2. npm start



host on server
https://github.com/MishraAshish/mernstack18/blob/master/readme.md


login
signup
hash password
validate

*react-router-dome
Link
NavLink



* to update vaccines or hospitals
const AddHospital = ({ onAdd }) => {
    // Your existing code...

    const addHospitalData = (e) => {
        e.preventDefault();
        const newHospitalData = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            charge: chargeRef.current.value,
            type: selectedGovernment
        };

        dispatch(addHospitalToDB(newHospitalData));

        // Call the onAdd function after the hospital is successfully added
        onAdd();

        // Clear input fields and reset selectedGovernment
        // Your existing code...
    };



    {activeTab === 'Vaccine' ? (
                    <>
                        <AddVaccine onAdd={handleAdd} />
                        <hr />
                        <Vaccines />
                    </>
                ) : (
                    <>
                        <AddHospital onAdd={handleAdd} />
                        <hr />
                        <Hospitals />
                    </>
                )}


     const [updateFlag, setUpdateFlag] = useState(false);

    useEffect(() => {
        // This effect will run whenever updateFlag changes
        // You can fetch updated data here if needed
        console.log("Page updated after addVaccine or addHospital");
    }, [updateFlag]);

    const handleAdd = () => {
        // Add logic here to handle adding a vaccine or hospital
        // After successful addition, update the activeTab to trigger a re-render
        setActiveTab(prevTab => (prevTab === 'Vaccine' ? 'Vaccine' : 'Hospital'));
    };           

==========================
    REACT MULTI CAROUSEL
    $ npm install react-multi-carousel --save

    import Carousel from 'react-multi-carousel';
    import 'react-multi-carousel/lib/styles.css';

    set up responsive data
                export const responsive = {
                    superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 1024 },
                    items: 5,
                    slidesToSlide: 1,
                    },
                    desktop: {
                    breakpoint: { max: 1024, min: 800 },
                    items: 4,
                    },
                    tablet: {
                    breakpoint: { max: 800, min: 464 },
                    items: 2,
                    },
                    mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                    },
                };
    
const product = productData.map((item) => (
        <CarouselItem
            key={item.id}
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            agePercentage={item.agePercentage}
            genderPercentage={item.genderPercentage}
            totalCoveragePercentage={item.totalCoveragePercentage}
        />
    ));

    return (
        <div className="App">
            <h1>React multi carousel</h1>
            //**************Using carousel with library*************//
            <Carousel 
                
                responsive={responsive}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                infinite={true}
            >
                {product}
            </Carousel>
        </div>
    );
================================
axios
requests to an API endpoint
=> npm install axios redux-thunk

REDUX THUNK
Define async action creator
middleware

Reducer must be pure, side-effect free, synchronus function.
inside the component via useEffect, and insde action creator, side effect and 
async task be executed.

Thunk : is a function that delay an action until later.
And we could write an action creator which does not immedietly return an action object.
but instead, return another function which eventually return the action.
So that we can rn sone other code before we dispatch the actual action object 
that we did want to create.

/// Learn some, reduce,

//Chart
d3 jsD3.js, or Data-Drivеn Documеnts, is a powеrful and flеxiblе JavaScript library
 for crеating complеx and custom data visualizations. Unlikе Chart.js and ApеxCharts,
  D3.js is not a charting library pеr sе; rathеr, it is a data manipulation library
   that еnablеs thе crеation of custom visualizations from scratch.
D3.js is highly praisеd for its ability to bind data to thе Documеnt Objеct Modеl 
(DOM) and apply data-drivеn transformations to thе documеnt. This allows 
for unparallеlеd flеxibility and crеativity in dеsigning visualizations. 
Howеvеr, thе lеarning curvе for D3.js can bе stееp, and it is oftеn considеrеd 
ovеrkill for simplе charting nееds.


//npm i react-qr-code


//mail service
npm install nodemailer
using Ethereal for testing email account (https://ethereal.email/)

