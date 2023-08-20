import React from 'react';

const Menu = () => {
  return (
    <section id="menu" className="features-section">
      <div className="features-container">
        <h3
          className="md-heading"
          style={{ width: "100%", textAlign: "center", color: '#000000' }}
        >
          MENU
        </h3>
        <p className="feature-info">
          At America's Best Wings, we serve more than just amazing chicken wings. Shift through our menu on UberEats, Grubhub, or Doordash to see all of our offerings before placing your order.
        </p>

      </div>
      <div className="feature-icons">
        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/wings.jpg' alt="wings" />
        </div>
        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/burger.jpg' alt="burger" />
        </div>
        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/wrap.jpg' alt="wrap" />
        </div>

        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/fish-chips.jpg' alt="fish & chips" />
        </div>
        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/sandwich.jpg' alt="sandwich" />
        </div>
        <div className="box">
          <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/pasta.jpg' alt="pasta" />
        </div>
      </div>
      <div className="features-container">

        <h3
          className="md-heading"
          style={{ width: "100%", textAlign: "center", color: '#000000', margin: '4% auto 3%' }}
        >
          ORDER NOW
        </h3>

        <a href='https://online.skytab.com/aab61c00eb0e1cbf86066f4523e4bd6b' rel='noreferrer' target='_blank'><button className='feature-button feature-order-btn'>ORDER ONLINE & PICKUP</button></a>

        <div id="order" className='feature-link-icon'>
          <div className="feature-link-icon-box">
            <a className="" href="https://www.grubhub.com/restaurant/americas-best-wings-18208-contour-rd-gaithersburg/5600984" rel='noreferrer' target='_blank'>
              <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387760/ABW/LOGOS/Grubhub_ucvxem.svg'
                alt="grubhub-logo"
                className='md-link-icon'
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a className="" href="https://www.ubereats.com/store/americas-best-wings-gaithersburg/svfrM4qZTQmvZejHa_RbNA?diningMode=DELIVERY" rel='noreferrer' target='_blank'>
              <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387761/ABW/LOGOS/Uber-Eats_kryvb5.svg'
                alt="uberEats-logo"
                className='md-link-icon'
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a className="" href="https://www.doordash.com/store/americas-best-wings-gaithersburg-24720723/19654372/?preview=1" rel='noreferrer' target='_blank'>
              <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/Doordash_yfdell.svg'
                alt="doordash-logo"
                className='md-link-icon'
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a className="" href="https://www.ezcater.com/catering/pvt/americas-best-wings-gaithersburg" rel='noreferrer' target='_blank'>
              <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1667634151/ABW/LOGOS/ezCater_Logo_upvoq1.jpg'
                alt="ezcater-logo"
                className='md-link-icon'
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;