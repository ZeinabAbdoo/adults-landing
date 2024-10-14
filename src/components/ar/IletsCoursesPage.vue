<template>
  <PopUp/>

  <div style="background-color: #fff;">
    <div class="ilets-sec1">
      <div class="sec1-content">
        <picture>
          <source media="(max-width: 768px)" srcset="@/assets/images/ilets/content1ar-mob.png">
          <img src="@/assets/images/ilets/content1ar.png" alt="Description" />
        </picture>
        <button @click="sendMessage" id="ilets-prep-btn">
          ابدأ رحلة التحضير الآن
        </button>
      </div>
    </div>
    
    <div class="ilets-sec3">
      <h2>ما هو اختبار IELTS؟ </h2>
      <h1>كل ما تحتاج معرفته عن اختبار IELTS</h1>
      <IletsSlider />
    </div>

    <div class="ilets-sec5">
      <div class="founder2-images">
        <img src="@/assets/images/ilets/bg3.png">
      </div>
      <div class="founder-info">
        <h3>كيف نقوم بإعدادك؟</h3>
        <h1>
          أفضل برنامج تحضيري لاختبار IELTS في مونجلش
        </h1>
        <ol>
          <li>1.
            اختبار تحديد المستوى: الطالب يجب أن يجتاز مستوى A2 في دورات الكبار.          
          </li>
          <li>2.
            حصتين أساسيتين أسبوعياً، مدة الحصة ساعتين.
          </li>
          <li>3.
            نوادي تفاعلية أسبوعية لمهارات مختلفة (ساعة لكل نادي).
          </li>
          <li>4.
            دعم كامل على مدار الأسبوع مع فريق المدرسين.          
          </li>
          <li>5.
            تسجيل الحصص لتمكين الطلاب من المراجعة المستمرة.          
          </li>
          <li>6.
            مادة علمية شاملة بصيغة PDF مع ملفات صوتية للتدريب على الاستماع.          
          </li>
          <li>7.
            اختبار تجريبي كامل شهرياً أو كل أسبوعين.          
          </li>
          <li>8.
            مصادر تعليمية مجانية.          
          </li>
          <li>9.
            دروس خصوصية (رسوم إضافية).          
          </li>
        </ol>
      </div>
    </div>

    <PackagesIlets />

    <div class="ilets-sec5">
      <div class="founder-info">
        <h3>تواصل فعّال لتقديم</h3>
        <h1>
         أفضل تجربة لعملائنا
        </h1>
        <p>ماذا يقول طلابنا عن برامج التحضير لاختبار IELTS في مونجلش؟</p>
      </div>

      <div class="founder2-images">
        <img src="@/assets/images/ilets/list.png">
      </div>
    </div>

    <ViewFour />

    <div class="full-section">
      <div class="Last-section">
        <h1>مازلت تحتاج للمساعدة ؟</h1>
        <p>يسعدنا استقبال رسائلكم والرد على جميع استفساراتكم.</p>
        <a href="https://www.monglish.co.uk/ar/contact" class="contact-btn">تواصل معنا</a>
      </div>
    </div>

    <FormSection2 />

    <div class="full-section-2">
      <div class="inner-section">
        <h1>
          ابدأ رحلتك نحو التفوق في اختبار IELTS
          <br>
          <span>
            مع مونجلش الآن!
          </span>
        </h1>
        <p>
          لا تضيع المزيد من الوقت! انضم لبرنامج التحضير الاحترافي لاختبار IELTS واستفد من الدعم الكامل والموارد المتقدمة. احجز مكانك اليوم لتحصل على أفضل تجربة تعليمية تضمن لك النجاح والتفوق.
        </p>
        <button @click="sendMessage" id="ilets-btn">إشترك معنا الأن
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IletsSlider from '../../components/ar/IletsSlider.vue';
import PackagesIlets from '../../components/ar/PackagesIlets.vue';
import ViewFour from '../../components/ar/ViewFour.vue';
import FormSection2 from '../../components/ar/FormSection2.vue';
  import PopUp from '../../components/ar/PopUp2.vue';

export default {
  name: "IletsCourses",
  components: {
    IletsSlider,PackagesIlets,ViewFour,FormSection2,PopUp
  },
  
  methods : {
    scrollToPackages() {
      const section = document.getElementById('packages-ilets-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/custom-phone-numbers`);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        if (this.chatInput !== '' && this.getNumber) {
          const baseUrl = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
              ? 'whatsapp://send'
              : 'https://web.whatsapp.com/send';
          const url = `${baseUrl}?phone=${this.getNumber}&text=${this.chatInput}`;
          window.open(url, '_blank');
        }
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    }
  }
};
</script>

<style scoped>
.ilets-sec1 {
  background-image: url('@/assets/images/ilets/bg1-1.png');
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: right;
  padding: 0;
  height: 100vh;
  direction: rtl;
  margin-top: -85px;
  z-index: 1;
}
@media (max-width: 768px) {
  .ilets-sec1 {
    background-image: url('@/assets/images/ilets/mob1.png');
  }
}
.ilets-sec2 {
  position: relative; 
  z-index: 2; 
}
.ilets-img {
  width: 100%;
  height: 30vh;
  margin-top: -180px;
  z-index: 10;
}
@media (max-width: 768px) {
  .ilets-img {
    height: 20vh;
    margin-top: -100px;
  }
}
.sec1-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8% 3% 8% 3%;
}
.ilets-sec1 button {
  width: 100%;
  max-width: 25%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}
@media (max-width: 768px) {
  .sec1-content {
    padding-top: 90%; 
  }
  .ilets-sec1 button {
    margin: 15px auto 0 auto;
    max-width: 50%;
  }
}
.ilets-sec3 {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-align: center;
  direction: rtl;
  background-color: #fff;
  padding: 2%;
}
.ilets-sec3 h1{
  color: #165E84;
  font-size: 48px;
}
.ilets-sec3 h2{
  color: #000;
  font-size: 36px;
}
@media (max-width: 768px) {
   .ilets-sec3 h1{
        font-size: 28px;
    }
    .ilets-sec3 h2{
        padding: 5% 0 0 0;
        font-size: 22px;
    } 
}

.ilets-sec5 {
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  font-family: 'DIN Next LT Arabic', sans-serif;
  color: white;
  display: flex;
  padding: 2%; 
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  text-align: right; 
}
.founder2-images {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.founder2-images img {
  max-width: 100%;
  height: auto;
}
.founder-info {
  flex: 1.5; 
  max-width: 50%;
  padding-right: 3%;
}
.founder-info h3 {
  font-size: 1.9rem;
  margin-bottom: 20px;
  font-weight: 500;
  text-transform: uppercase; 
}
.founder-info h1 {
  font-size: 3rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
}
.founder-info p {
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
}
.founder-info ol {
  padding: 0;
  list-style-position: inside; 
}
.founder-info ol li {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
@media (max-width: 1200px) {
  .ilets-sec5 {
    flex-direction: column;
    height: auto;
  }
  .founder-info {
    max-width: 90%;
    margin-bottom: 20px;
    padding-right: 0;
  }
}
@media (max-width: 768px) {
  .founder-info h1 {
    font-size: 2.2rem;
  }
  .founder-info h3 {
    font-size: 1.5rem;
  }
  .founder-info p {
    font-size: 1rem;
  }
  .founder2-images img {
    max-width: 80%; 
  }
}
@media (max-width: 480px) {
  .founder-info {
    text-align: center;
  }
  .founder-info h1 {
    font-size: 1.8rem;
  }
  .founder-info h3 {
    font-size: 1.3rem;
  }
  .founder-info ol li {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .founder2-images img {
    max-width: 100%; 
  }
}

.full-section{
    background-color: #fff;
  padding: 2% 6% 1% 6%;
}
.Last-section h1 {
  font-size: 40px;
  line-height: 60px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}
.Last-section {
  width: 100%;
  background-color: #eee;
  border-radius: 15px;
  direction: rtl;
  text-align: right;
  position: relative;
  padding: 20px;
  margin: 20px auto;
}
.Last-section p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
}
.contact-btn {
  display: inline-block;
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  left: 20px; 
  bottom: 20px;
}
@media (max-width: 768px) {
  .Last-section {
    width: 95%;  /* Full width for mobile */
    padding: 10px;  /* Adjust padding */
    margin: 20px auto;  /* Adjust margin */
  }
  .Last-section h1 {
    font-size: 28px;  /* Smaller font size for mobile */
    line-height: 40px;  /* Adjust line height */
  }
  .Last-section p {
    font-size: 16px;  /* Smaller font size for mobile */
    line-height: 24px;  /* Adjust line height */
  }
  .contact-btn {
    padding: 8px 16px;  /* Adjust padding */
    font-size: 18px;  /* Smaller font size for mobile */
    position: relative;  /* Change position to relative */
    left: auto;  /* Reset right position */
    bottom: auto;  /* Reset bottom position */
    margin-top: 10px;  /* Add margin for spacing */
  }
}

.full-section-2 {
  background-color: #fff;
  padding: 4%;
}
.inner-section {
  background-image: url('@/assets/images/ilets/fif.png');
  background-size: cover;
  background-position: center;
  font-family: 'DIN Next LT Arabic', sans-serif;
  border-radius: 20px;
  padding: 2% 5%;
  color: #000;
  text-align: center;
}
.inner-section h1 {
  color: #000;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 20px;
}
.inner-section h1 span {
  color: #fff;
  background-color: #f77919;
  padding: 0 10px;
  line-height: 1; 
  display: inline-block; 
  padding-bottom: 12px; 
}
.inner-section p {
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.5;
  padding: 0 20%;
  color: #343434;
}
.inner-section button {
  width: 100%;
  max-width: 25%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
}
.inner-section button:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #f77919, #fe9b4f);
}
@media (max-width: 1200px) {
  .inner-section h1 {
    font-size: 40px; 
  }
  .inner-section p {
    font-size: 1.1rem;
    padding: 0 15%; 
  }
  .inner-section button {
    max-width: 30%; 
  }
}
@media (max-width: 768px) {
  .inner-section {
    padding: 5% 10%; 
  }
  .inner-section h1 {
    font-size: 32px; 
  }
  .inner-section p {
    font-size: 1rem;
    padding: 0 10%; 
  }
  .inner-section button {
    max-width: 40%; 
  }
}
@media (max-width: 480px) {
  .inner-section {
    padding: 8% 5%; 
  }
  .inner-section h1 {
    font-size: 28px; 
  }
  .inner-section p {
    font-size: 0.9rem;
    padding: 0 5%; 
  }
  .inner-section button {
    max-width: 60%;
    font-size: 1rem; 
  }
}
</style>
