import './index.scss';
import reservationSelect from './js/components/reservationSelect';
import calroiesSwiper from './js/components/caloriesSwiper';
import modalAccordion from './js/components/modalAccordion';
import modalToggle from './js/components/modal';

window.addEventListener('DOMContentLoaded', () => {

try{
    reservationSelect(".select-selected",".select-items");
}catch{}
try{
    reservationSelect(".select-selected2",".select-items2");
}catch{}
try{
    calroiesSwiper();
}catch{}
try{
    modalAccordion();
}catch{}
try{
    modalToggle();
}catch{}
});



