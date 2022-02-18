import logo from './logo.svg';
import './App.css';
import Map from './components/home/map.jsx';
import ResponsiveAppBar from './components/header/header.js';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
      <ResponsiveAppBar className="nav"/>
      <Map />
    <h3 className='tit'>جذاذة فنية لمشروع الحدائق البيداغوجية </h3>
    <Switch>
      

      <Route path="/Beja" exact>
        <div > <p className='label'>باجة :  الطبابة ،بوجدرة ، وادي سالم</p></div>
      </Route>
      <Route path="/Bizerte" exact>
        <div > <p className='label'>بنزرت : السميرة سجنان</p></div>
      </Route>
      <Route path="/Zaghouen" exact>
        <div > <p className='label'>زغوان : جرادو ، هنشير الجديد، طريق السوق </p></div>
      </Route>
      <Route path="/Sousse" exact>
        <div ><p className='label'>سوسة : مرابط حشاد ( النفيضة) ، الفرادي ( النفيضة) ،الكروسية (سيدي الهاني)</p></div>
      </Route>
      <Route path="/Jendouba" exact>
        <div > <p className='label'>جندوبة : منجم بوعوان ( بلطة جندوبة) </p></div>
      </Route>
      <Route path="/Gabes" exact>
        <div > <p className='label'>ڨابس : الرماثي  </p></div>
      </Route>
      <Route path="/Sidibouzid" exact>
        <div > <p className='label'>سيدي بوزيد : غدير الربايع ( المزونة) ، زفزاف ( سوق الجديد)  </p></div>
      </Route>
      <Route path="/Kairouan" exact>
        <div > <p className='label'>القيروان : وادي الجباس </p></div>
      </Route>
      <Route path="/Ariana" exact>
        <div > <p className='label'>أريانة : سبالة بن عمار</p></div>
      </Route>
      <Route path="/Kasserine" exact>
        <div > <p className='label'>القصرين : العريش، سيدي حراث، قلال سمامة ، بوحية (فريانة) 
و عين بوعارعار (العيون)</p></div>
      </Route>
      <Route path="/Kef" exact>
        <div > <p className='label'>الكاف: المحاسن ( نبر) </p></div>
      </Route>
      <Route path="/Tozeur" exact>
        <div > <p className='label'>توزر : بن خلدون (حزوة) </p></div>
      </Route>
      <Route path="/Nabeul" exact>
        <div > <p className='label'>نابل : غرداية ، بولزهار ، قربة ، المهن</p></div>
      </Route>
      <Route path="/Siliana" exact>
        <div > <p className='label'>سليانة : بوعبد الله (كسرى)</p></div>
      </Route>
    </Switch>  
    </div>
  );
}

export default App;
