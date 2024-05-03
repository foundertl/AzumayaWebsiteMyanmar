import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='myanmar_container'>
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-12'>
          <div className="branch-closed-notice">
          <h2>Azumaya Myanmar Branch Is Closed</h2>
          <p>We regret to inform you that the Azumaya Myanmar branch you are attempting to access is presently closed.
          <br/>Kindly consider visiting an alternate branch. We apologize for any inconvenience this may cause.
          </p>
        </div>
          <div className="container-fluid" >
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="content__feature-item m-0">
                    <div className="content__feature-container m-0" style={{height: '300px'}}>
                      <div
                        className="content__feature-img"
                        style={{background: 'url(https://azumayavietnam.com/image/areaimage/cambodia1.png) center center / cover no-repeat', height:'300px'}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                          to = 'http://azumayacambodia.com/'
                      ></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content__feature-item m-0">
                    <div className="content__feature-container m-0" style={{height: '300px'}}>
                      <div
                        className="content__feature-img"
                        style={{background: 'url(https://azumayavietnam.com/image/areaimage/vietnam1.jpg) center center / cover no-repeat', height:'300px'}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                          to = 'http://azumayavietnam.com/'
                      ></Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
