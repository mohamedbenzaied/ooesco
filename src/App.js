import logo from './logo.svg';
import './App.css';
import Map from './components/home/map.jsx';
import ResponsiveAppBar from './components/header/header.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div>
      <ResponsiveAppBar className="nav"/>
      <Map />
    <Switch>
      

      <Route path="/Beja" exact>
        <div > <p className='label'>باجة :  الطبابة ،بوجدرة ، وادي سالم</p>
        <p className='label2'> <div>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية</font></font><font size={4} style={{fontSize: '16pt'}}> </font></span></font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أولاد
                  سالم </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>_
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>نفزة</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>عدد
                  التلاميذ&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            150</font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البئر&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سد
                  فلاحي</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  الأرض </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحته
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>1.20
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه
                  محترثة و صالحة للإستغلال الفلاحي</font></font><font size={4} style={{fontSize: '16pt'}}>
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>. </font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  أشجار مثمرة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الموقع
                  بالنسبة للمعبد&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>طريق
                  معبد</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>رأي
                  التنمية الفلاحية&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>توفر
                  الإمكانيات الأساسية لبعث مشروع</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ماء
                  صالح للري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  أرض ذات مساحة كافية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>نوعية
                  التربة جيدة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>التجهيزات
                  الضرورية&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بيت
                  مكيف مكيفة </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أدوات
                  بستنة </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>تجهيزات
                  الري قطرة قطرة لهكتار </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصاريف
                  الإستغلال</font></font></span></font></p>

        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المندوبية
                  الجهوية للتربية بباجة </font></font></span></font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الوحدة
                  المحلية بتستور</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية وادي جدرة</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>القاعات
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            04</font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكونات
                  المؤسسة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  الحديقة البيداغوجية</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            01 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك
                  و </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>750
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>آر
                  محاذية للمدرسة و غير مستغلة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  واحدة</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بعلية</font></font></span></font></p>
        <p dir="rtl" className="text" style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>و</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  غراسات داخل المدرسة يوجد أشجار زيتون
                  كما يمكن إستغلال مساحات داخل المؤسسة
                  لزراعة أحواض للخضر الورقية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
      </div></p>
        </div>
      </Route>
      <Route path="/Bizerte" exact>
        <div > <p className='label'>بنزرت : السميرة سجنان</p>
        <p className='label2'> <div>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>السميرة
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سجنان</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكونات
                  المدرسة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-1</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البناءات</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البناية
                  موجودة في وسط القطعة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-2
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  الحديقة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            1.4 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>نعم</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  واحدة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>نعم</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سقوية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>نعم
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>إستغلال
                  ماجل</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>3-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الغراسات</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>63
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>شجرة
                  كالاتوس على طول السياج</font></font></span></font></p>
      </div></p></div>
      </Route>
      <Route path="/Zaghouen" exact>
        <div > <p className='label'>زغوان : جرادو ، هنشير الجديد، طريق السواني </p>
        <p className='label2'><p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هنشير
                  الجديد</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>عقد
                  إتفاقية إستغلال الحديقة بين جمعية العمل
                  التنموي بالمدرسة و مجمع التنمية الفلاحية
                  للمرأة الريفية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>زراعة
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>0.80
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك
                  طماطم و فلفل</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>تهيئة
                  البيت المكيف و إعداده للزراعة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>تحويل
                  مبلغ مالي للمجمع النسائي قدره </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>20
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ألف
                  د من طرف</font></font><font size={4} style={{fontSize: '16pt'}}>
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>PAM</font></p></p>
        </div>
      </Route>
      <Route path="/Sousse" exact>
        <div ><p className='label' id='scroll'>سوسة : سيدي سعد )بوفيشة( ، أولاد بوبكر (سيدي الهاني) ،الكروسية (سيدي الهاني)</p>
        <p className='label2'> <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المندوبية
                  الجهوية بسوسة                                            
                  الوحدة المحلية ببوفيشة</font></font></span></font></p>
        <p dir="rtl" align="left" style={{marginBottom: '0.14in'}}>             
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية سيدي سعد بوفيشة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكونات
                  المؤسسة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-1
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البناءات
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  و مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>عدد
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>06
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قاعات
                  تدريس</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قسم
                  تحضيري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكتب
                  مدير</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الوحدات
                  الصحية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المساحة
                  الجملية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:1100
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>عدد
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>04
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساكن
                  شاغرة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>+
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مسكن
                  وظيفة شاغرة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحة
                  الساحة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            2000</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2
            / </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحة
                  الملعب</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:1000</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2/
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  أشجار زينة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحة
                  الحديقة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            3000 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سور
                  المدرسة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>طوله
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>400
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>متر
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>/
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>إرتفاعه
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font><font size={4} style={{fontSize: '16pt'}}>
              </font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  الحديقة البيداغوجية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            3000</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>م</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  محترثة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الأمطار</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>و</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  غراسات </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  إن وجدت</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>)
            : </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>تحيط
                  بالقطعة أشجار الصنوبر و الكاليتوس و بها
                  الكثير من الأعشاب الطفيلية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بعض
                  أحواض الفول من إعداد تلاميذ المدرسة </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>التربية
                  التكنولوجية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المندوبية
                  الجهوية للتربية بسوسة                             
                  الوحدة المحلية بسيدي الهاني</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية أولاد بوبكر</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكونات
                  المؤسسة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-1</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البناءات
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  و مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>5
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قاعات
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>8×8</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكتب
                  للمدير </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>8×3</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ركن
                  صغير لعامل المدرسة و المطعم </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>2×2</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>2-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  الحديقة البيداغوجية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            1 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مياه
                  الصوناد</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>و
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  غراسات </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  إن وجدت</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>)
            : </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  ما يقارب ال </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>20
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>زيتونة
                  و أشجار زينة و غابية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المندوبية
                  الجهوية للتربية بسوسة                             
                  الوحدة المحلية سيدي الهاني</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية كروسية المركزية</font></font><font size={4} style={{fontSize: '16pt'}}>
              </font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مكونات
                  المؤسسة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>1-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>البناءات
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  و مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
            5 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قاعات
                  متجاورة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
            2 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قاعات
                  أخرى منفصلة عنها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قاعة
                  تحضيري مسيجة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وحدة
                  صحية خاصة بالذكور و أخرى بالإناث</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وحدة
                  صحية خاصة بالمعلمين</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>*.
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ملعب
                  رياضة</font></font><font size={4} style={{fontSize: '16pt'}}> </font></span></font><font size={4} style={{fontSize: '16pt'}}>.
          </font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>2
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  الحديقة البيداغوجية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            0.35 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  واحدة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  محترثة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وجود
                  بئر قديمة متروكة يمكن إستصلاحها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>و</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  غراسات </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  إن وجدت</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>)
            : 8 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أشجار
                  زيتون شبه مهملة</font></font></span></font></p></p>
        </div>
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
        <div > <p className='label'>القيروان : وادي الجباس </p>
          <p className='label2'><div>
        <p className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية</font></font> <font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وادي
                  الجباس</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            1.9</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  محترثة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الأمطار</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  بناءات آيلة للسقوط</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>و</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  غراسات </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>(</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>وصفها
                  إن وجدت</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>)
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أشجار
                  متناثرة في الساحة الصالحة للإستغلال</font></font></span></font>.</p>
      </div></p></div>
      </Route>
      <Route path="/Ariana" exact>
        <div > <p className='label'>أريانة : سبالة بن عمار</p>
        <p className='label2'><div>
        <p className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية سبالة بن عمار</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  أرض فسيحة مقسمة على ثلاثة أجزاء</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  محترثة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>الأمطار</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>
        </p></div></p></div>
      </Route>
      <Route path="/Kasserine" exact>
        <div > <p className='label'>القصرين : العريش، سيدي حراث، قلال سمامة ، بوحية (فريانة) و عين بوعارعار ( العيون) 
و عين بوعارعار (العيون)</p>
<p className='label2'><div>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قلال
                  سمامة </font></font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>  <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                  – مساحتها&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            0.5</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  مقسمة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  محترثة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>غير
                  سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ليس
                  بها ماء للري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>العريش</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                  – مساحتها&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>3.2
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ب
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ج</font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>د
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>سقوية</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ه</font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>مصدر
                الري </font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>طريق
                  جمعية مائية</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>لا
                  تتوفر على مطعم مدرسي</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سيدي
                  حراث</font></font></span></font></p>
        <p style={{marginBottom: '0.14in'}}><br />
          <br />
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>قطعة
                  أرض غير صالحة للخضروات لكنها صالحة
                  لغراسة الأشجار المثمرة و الزيتون</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
      </div>
  </p></div>
      </Route>
      <Route path="/Kef" exact>
        <div > <p className='label'>الكاف: الجريصة) </p></div>
      </Route>
      <Route path="/Tozeur" exact>
        <div > <p className='label'>توزر : بن خلدون (حزوة) </p></div>
      </Route>
      <Route path="/Nabeul" exact>
        <div > <p className='label'>نابل : غرداية ، بولزهار ، قربة ، المهن</p>
        <p className='label2'><p dir="rtl" className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية المهن </font></font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                  – مساحتها&nbsp;</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            3</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د
                </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سقوية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بئر</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                  فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية بولزهار </font></font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>أ
                – مساحتها&nbsp;</font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            1</font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>هك</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ب
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>غير
                مقسمة</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ج</font></span></font><font size={4} style={{fontSize: '16pt'}}>-
          </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>غير
                محترثة</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>د
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>غير
                سقوية</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ه</font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>مصدر
                الري </font></span></font><font size={4} style={{fontSize: '16pt'}}>:</font><font size={4} style={{fontSize: '16pt'}}>
          </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ليس
                بها ماء للري</font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بها
                  أشجار مثمرة</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>جذاذة
                فنية لمشروع حديقة بيداغوجية</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية غرداية </font></font></span></font>
        </p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ
                  – مساحتها </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            0.8</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>ب
              </font></span></font><font size={4} style={{fontSize: '16pt'}}>- </font><font face="Arial"><span lang="ar-SA"><font size={4} style={{fontSize: '16pt'}}>غير
                مقسمة</font></span></font></p>
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري </font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ليس
                  بها ماء للري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>.</font></p>
    
        <p dir="rtl" className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
        <p className='text' style={{marginBottom: '0.14in'}}>
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مشروع
                  جذاذة فنية لمشروع حديقة بيداغوجية</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>المدرسة
                  الإبتدائية قربة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>أ</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مساحتها</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
            3.8 </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>هك</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ب</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مقسمة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ج</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>محترثة</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>د</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>سقوية</font></font></span></font></p>
        <p className='text' style={{marginBottom: '0.14in'}}><a name="_GoBack" />
          <font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>ه</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>-</font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>مصدر
                  الري</font></font></span></font><font size={4} style={{fontSize: '16pt'}}>:
          </font><font face="Arial"><span lang="ar-SA"><font face="Arial"><font size={4} style={{fontSize: '16pt'}}>بئر</font></font></span></font></p>
        </p></p></div>
      </Route>
      <Route path="/Siliana" exact>
        <div > <p className='label'>سليانة : بوعبد الله (كسرى)</p></div>
      </Route>
      <Redirect to="/" />
    </Switch>  
    </div>
  );
}

export default App;
