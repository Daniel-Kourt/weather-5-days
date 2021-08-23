import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import ModalDaily from './ModalDaily';

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content : {
        position: 'absolute',
        top: '50%',
        left: '50%',     
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        padding: 0,
        width: '90%',
        maxWidth: '30rem',
        height: '30rem',
        borderRadius: '25px'
    }
  };
  

Modal.setAppElement('#root');


const DailyWeather = ({day}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalToggle = () => setModalIsOpen(!modalIsOpen);

    return (
        <>
            <article 
                className="flex md:flex-col justify-between items-center px-4 md:py-4 text-sm h-12 md:h-auto bg-third rounded-md shadow-md" 
            >

                    <p className="w-1/3 md:w-full font-semibold">
                        <span className="lg:hidden">
                            {moment.unix(day.dt).format('ddd')}
                        </span>
                        <span className="hidden lg:block">
                            {moment.unix(day.dt).format('dddd')}
                        </span>
                        <span> {moment.unix(day.dt).format('D')}
                        </span>
                    </p>

                    <p className="text-right md:text-center w-1/3 md:w-full md:order-3">
                        <span className="text-gray-600 mr-2">
                            {Math.round(day.temp.min)}&#176;
                        </span>
                        <span> </span>
                         {Math.round(day.temp.max)}&#176;
                    </p>

                    
                    <div className="w-1/3 md:w-full flex justify-end md:justify-center md:order-2">  
                        <img 
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].main}
                            className="h-12 md:h-16" 
                        />     
                    </div>

                    <div className="w-1/3 text-2xl text-right font-bold cursor-pointer md:order-4" onClick={modalToggle}>
                        <span className="md:hidden">+</span>
                        <span className="hidden md:block text-xs text-blue-900 pt-4 hover:underline">More</span>
                    </div>              
                                      
                    
            </article>

            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={modalStyles}                    
            >
                <ModalDaily day={day} modalToggle={modalToggle} />
            </Modal>
           
            
        </>
    )
}

export default DailyWeather
