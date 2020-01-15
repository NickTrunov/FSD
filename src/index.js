import 'jquery-ui/ui/widgets/datepicker';
import 'jquery.maskedinput/src/jquery.maskedinput';
import './blocks/calendar/calendar';
import './blocks/configuration-dropdown/dropdown-plugin/dropdown-plugin';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('../src/', true, /\.js$|\.scss$/));

$('.js-masked').mask('99.99.9999');