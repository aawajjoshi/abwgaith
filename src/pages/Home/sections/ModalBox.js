import React from "react";
import Modal from "../../../components/Modal";

const ModalText = () => {
  return (
    <div>
      <h3 className="md-heading">BEST WINGS FOR PICKUP OR DELIVERY</h3>
      <p className="md-info">
      At America's Best Wings, you can place your order online for pickup in store. Alternatively, you can have America’s best wings delivered right to your doorsteps through one of delivery partners. Order online now!
      </p>
      <a href='https://online.skytab.com/aab61c00eb0e1cbf86066f4523e4bd6b' rel='noreferrer' target='_blank'><button className='md-link-icon-clover'>ORDER ONLINE FOR PICKUP OR DELIVERY</button></a>
      <div className="md-link">
      <div className="md-link-box">
            <a className="" href="https://www.grubhub.com/restaurant/americas-best-wings-18208-contour-rd-gaithersburg/5600984" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387760/ABW/LOGOS/Grubhub_ucvxem.svg'
                alt="grubhub-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://www.ubereats.com/store/americas-best-wings-gaithersburg/svfrM4qZTQmvZejHa_RbNA?diningMode=DELIVERY" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387761/ABW/LOGOS/Uber-Eats_kryvb5.svg'
                alt="uberEats-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://www.doordash.com/store/americas-best-wings-gaithersburg-24720723/19654372/?preview=1" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/Doordash_yfdell.svg'
                alt="doordash-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        {/* <div className="md-link-box">
            <a className="" href="https://eat.chownow.com/discover/restaurant/43450/americas-best-wings-wheaton-11242-georgia-ave-silver-spring" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1618184611/ABW/LOGOS/Chownow_vxvh3x.svg'
                alt="chowNow-logo"
                className='md-link-icon'
                />
            </a>
        </div> */}
      </div>
    </div>
  );
};

const ModalBox = () => {
    return <Modal modalText={<ModalText />} />
}

export default ModalBox;
