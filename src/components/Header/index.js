import "./index.css"

const Webpage = ()=>{
    return(
        <>
            <nav className="nav-head">
            <div className="head-con1">
                <div className="items-con">
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704853444/n1wh44bzlrn8xe7tibpy.png" alt="profile" className="img1"/>
                    <p className="chintu">Hello chintu!Welocome Back!</p>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704853644/dbz79y8k62gt8h2mujpy.png" alt="hand" className="img2"/>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704853781/a5fbvz9hxxw6yazez6a3.png" alt="CATking" className="img3"/>
                    </div>
                
                
            </div>

            <div className="btn-flex">
                    <button className="btn1">
                        Current Week Report
                    </button>
                    <button className="btn2">
                        40 Days Challenge
                    </button>
                    <button className="btn1">
                        All Schedules
                    </button>
                    <button className="btn1">
                        Top 10 Percentile Students
                    </button>
                    <button className="btn1">
                        Top 100 Students
                    </button>
                    <button className="btn1">
                        My Activity
                    </button>
                </div>
                </nav>
                <br/>
        <div className="btns-arrange">
            <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704859183/qg7nagokl61jrr41mk4u.png" alt="Arrow" className="arr-img"/>
            <button className="green-btn">
                All
            </button>
            <button className="order-btn">
                NMAT
            </button>
            <button className="order-btn">
                SNAP
            </button>
            <button className="order-btn">
                MICAT
            </button>
            <button className="order-btn">
                IIFT
            </button>
            <button className="order-btn">
                XAT
            </button>
            <button className="order-btn">
                TISSNET
            </button>
            <button className="order-btn">
                CMAT
            </button>
            <button className="order-btn">
                CET
            </button>
            </div>
            <h1 className="today-hed">
                Today's Classes
            </h1>
            <h2 className="today-hed2">
                NMAT
            </h2>
            <div className="class-det">
                <div className="video-flex">
                    <div>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704860968/nsna09qzys4ejcvxd01w.png" alt="video" className="video-width" />
                    </div>
                    <div className="pad-it">
                      <p className="date">
                        <span className="spn">Date</span>
                        <br/>
                        8th JUly
                      </p>

                    </div>
                </div>
                <div className="pad-it">
                <p className="date">
                    <span className="spn">Topic(Arithmetic)</span>
                    <br/>
                    Simple and Compund Interest
                    </p>
                    </div>
                <div className="pad-it">
                    <p className="date">
                        <span className="spn">
                            Time
                        </span>
                        <br/>
                        2-3 pm
                    </p>
                </div>
                <div className="pad-it">
                    <button className="join-cls">
                        Join Class <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704862055/qgd4umcgoaguuyzy9apg.png" alt="vector"/>
                    </button>
                </div>
            </div>  
            <br/>
            <h1 className="today-hed2">
                SNAP
            </h1>
            <div className="class-det">
                <div className="video-flex">
                    <div>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704860968/nsna09qzys4ejcvxd01w.png" alt="video" className="video-width" />
                    </div>
                    <div className="pad-it">
                      <p className="date">
                        <span className="spn">Date</span>
                        <br/>
                        8th JUly
                      </p>

                    </div>
                </div>
                <div className="pad-it">
                <p className="date">
                    <span className="spn">Topic(Verbal Ability)</span>
                    <br/>
                    Reading Comphrension
                    </p>
                    </div>
                <div className="pad-it">
                    <p className="date">
                        <span className="spn">
                            Time
                        </span>
                        <br/>
                        2-3 pm
                    </p>
                </div>
                <div className="pad-it">
                    <button className="join-cls">
                        Join Class <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704862055/qgd4umcgoaguuyzy9apg.png" alt="vector"/>
                    </button>
                </div>
            </div>  
            <br/>
            <div className="class-det">
                <div className="video-flex">
                    <div>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704860968/nsna09qzys4ejcvxd01w.png" alt="video" className="video-width" />
                    </div>
                    <div className="pad-it">
                      <p className="date">
                        <span className="spn">Date</span>
                        <br/>
                        8th JUly
                      </p>

                    </div>
                </div>
                <div className="pad-it">
                <p className="date">
                    <span className="spn">Topic(Quantitative Ability)</span>
                    <br/>
                    Number System
                    </p>
                    </div>
                <div className="pad-it">
                    <p className="date">
                        <span className="spn">
                            Time
                        </span>
                        <br/>
                        6-7 pm
                    </p>
                </div>
                <div className="pad-it">
                    <button className="join-cls">
                        Join Class <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704862055/qgd4umcgoaguuyzy9apg.png" alt="vector"/>
                    </button>
                </div>
            </div>  

              </>  

        
    )
}
export default Webpage


