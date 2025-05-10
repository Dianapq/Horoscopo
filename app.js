import HoroscopeController from './src/controller/HoroscopeController.js';
import HoroscopeModel from './src/model/HoroscopeModel.js';
import HoroscopeView from './src/view/HoroscopeView.js';

const model = new HoroscopeModel();
const view = new HoroscopeView();
const controller = new HoroscopeController(model, view);

view.bindDateInput((isValid) => controller.handleDateInput(isValid));
view.bindConsult(() => controller.consultHoroscope(view.getDateInput()));
